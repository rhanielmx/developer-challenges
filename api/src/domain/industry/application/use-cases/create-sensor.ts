import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Either, left, right } from '@/core/either';
import { SensorsRepository } from "../repositories/sensors-repository";
import { Sensor } from "../../enterprise/entities/sensor";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { MonitoringPointsRepository } from "../repositories/monitoring-points-repository";
import { MachinesRepository } from "../repositories/machines-repository";

interface CreateSensorUseCaseRequest {
  name: string
  model: "TCAG" | "TCAS" | "HF"
  status?: "ACTIVE" | "INACTIVE"
  monitoringPointId: string
  ownerId: string
}

type CreateSensorUseCaseResponse = Either<
  NotFoundException | BadRequestException,
  {
    sensor: Sensor
  }
>

@Injectable()
export class CreateSensorUseCase {
  constructor(
    private sensorsRepository: SensorsRepository,
    private monitoringPointsRepository: MonitoringPointsRepository,
    private machinesRepository: MachinesRepository,
  ){}

  async execute({
    name,
    model,
    status,
    monitoringPointId,
    ownerId
  }: CreateSensorUseCaseRequest): Promise<CreateSensorUseCaseResponse> {
    const monitoringPoint = await this.monitoringPointsRepository.findById(monitoringPointId)

      if(!monitoringPoint) {
        return left(new NotFoundException("Monitoring point not found")) 
      }

      const machine = await this.machinesRepository.findById(monitoringPoint.machineId.toValue())

      if(!machine) {
        return left(new NotFoundException("Machine not found.")) 
      }

      if(machine.ownerId.toValue() !== ownerId){
        return left(new BadRequestException("You can only edit machines you own.")) 
      }

      if(machine.type === "PUMP" && (model === 'TCAG' || model ==='TCAS')) {
       return left(new BadRequestException("Machine of type PUMP can't have sensor of type TcAg or TcAs.")) 
      }
    
    const sensor = Sensor.create({
      model,
      monitoringPointId: new UniqueEntityID(monitoringPointId),
      name,
      status
    })

    this.sensorsRepository.create(sensor)

    return right({
      sensor
    })
  }
}