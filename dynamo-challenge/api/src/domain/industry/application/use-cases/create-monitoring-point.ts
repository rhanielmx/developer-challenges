import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { Either, left, right } from '../../../../core/either';
import { MonitoringPoint } from "../../enterprise/entities/monitoring-point";
import { MonitoringPointsRepository } from "../repositories/monitoring-points-repository";
import { MachinesRepository } from '../repositories/machines-repository';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

interface CreateMonitoringPointUseCaseRequest {
  name: string
  machineId: string
  userId: string
}

type CreateMonitoringPointUseCaseResponse = Either<
  NotFoundException | UnauthorizedException,
  {
    monitoringPoint: MonitoringPoint
  }
>

@Injectable()
export class CreateMonitoringPointUseCase {
  constructor(
    private monitoringPointsRepository: MonitoringPointsRepository,
    private machinesRepository: MachinesRepository
  ){}

  async execute({
    name,
    machineId,
    userId
  }: CreateMonitoringPointUseCaseRequest): Promise<CreateMonitoringPointUseCaseResponse>{
    const machine = await this.machinesRepository.findById(machineId)

    if(!machine) {
      return left(new NotFoundException("Machine not found."))
    }

    if(machine.ownerId.toValue() !== userId) {
      return left(new UnauthorizedException("Only the owner of the machine can create monitoring points."))
    }

    const monitoringPoint = MonitoringPoint.create({
      name,
      machineId: new UniqueEntityID(machineId)
    })

    this.monitoringPointsRepository.create(monitoringPoint)

    return right({
      monitoringPoint
    })
  }
}