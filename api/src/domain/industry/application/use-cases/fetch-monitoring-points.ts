import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { MonitoringPoint } from "../../enterprise/entities/monitoring-point"
import { MonitoringPointsRepository } from "../repositories/monitoring-points-repository"
import { MachinesRepository } from '../repositories/machines-repository'

interface CreateMonitoringPointUseCaseRequest {
  machineId: string
  userId: string
  page: number
}

type CreateMonitoringPointUseCaseResponse = Either<
  NotFoundException | UnauthorizedException,
  {
    monitoringPoints: MonitoringPoint[]
  }
>

@Injectable()
export class CreateMonitoringPointUseCase {
  constructor(
    private monitoringPointsRepository: MonitoringPointsRepository,
    private machinesRepository: MachinesRepository
  ){}

  async execute({
    machineId,
    userId,
    page
  }: CreateMonitoringPointUseCaseRequest): Promise<CreateMonitoringPointUseCaseResponse>{
    const machine = await this.machinesRepository.findById(machineId)

    if(!machine) {
      return left(new NotFoundException("Machine not found."))
    }

    if(machine.ownerId.toValue() !== userId) {
      return left(new UnauthorizedException("Only the owner of the machine can see the monitoring points."))
    }

    const monitoringPoints = await this.monitoringPointsRepository.findManyRecent({ page }, userId)

    return right({
      monitoringPoints
    })
  }
}