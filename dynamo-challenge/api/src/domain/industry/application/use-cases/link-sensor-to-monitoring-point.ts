import { Either, left, right } from '../../../../core/either'
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common"
import { MonitoringPoint } from '../../enterprise/entities/monitoring-point'
import { MachinesRepository } from '../repositories/machines-repository'
import { SensorsRepository } from '../repositories/sensors-repository'
import { MonitoringPointsRepository } from '../repositories/monitoring-points-repository'

interface LinkSensorToMonitoringPointUseCaseRequest{
  sensorId: string
  monitoringPointId: string
  userId: string
}

type LinkSensorToMonitoringPointUseCaseResponse = Either<
  NotFoundException | BadRequestException,
  {
    monitoringPoint: MonitoringPoint    
  }
>

@Injectable()
export class LinkSensorToMonitoringPointUseCase {
  constructor(
    private sensorsRepository: SensorsRepository,
    private machinesRepository: MachinesRepository,
    private monitoringPointsRepository: MonitoringPointsRepository
  ){}
    async execute({
      sensorId,
      monitoringPointId,
      userId
    }: LinkSensorToMonitoringPointUseCaseRequest): Promise<LinkSensorToMonitoringPointUseCaseResponse> {
      const monitoringPoint = await this.monitoringPointsRepository.findById(monitoringPointId)

      if(!monitoringPoint) {
        return left(new NotFoundException("Monitoring point not found")) 
      }

      const sensor = await this.sensorsRepository.findById(sensorId)

      if(!sensor) {
        return left(new NotFoundException("Sensor not found.")) 
      }
      
      const machine = await this.machinesRepository.findById(monitoringPoint.machineId.toValue())

      if(!machine) {
        return left(new NotFoundException("Machine not found.")) 
      }

      if(machine.ownerId.toValue() !== userId){
        return left(new BadRequestException("You can only edit machines you own.")) 
      }

      if(machine.type === "PUMP" && (sensor.model === 'TCAG' || sensor.model ==='TCAS')) {
       return left(new BadRequestException("Machine of type PUMP can't have sensor of type TcAg or TcAs.")) 
      }

      monitoringPoint.sensorId = sensor.id

      await this.monitoringPointsRepository.linkToSensor(monitoringPointId, sensorId)

      return right({
        monitoringPoint
      })
  }
}