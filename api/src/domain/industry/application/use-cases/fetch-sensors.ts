import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Sensor } from "../../enterprise/entities/sensor"
import { SensorsRepository } from "../repositories/sensors-repository"

interface FetchSensorsUseCaseRequest {
  ownerId: string
}

type FetchSensorsUseCaseResponse = Either<
  NotFoundException | UnauthorizedException,
  {
    sensors: Sensor[]
  }
>

@Injectable()
export class FetchSensorsUseCase {
  constructor(
    private sensorsRepository: SensorsRepository
  ){}

  async execute({
    ownerId,
  }: FetchSensorsUseCaseRequest): Promise<FetchSensorsUseCaseResponse>{
    const sensors = await this.sensorsRepository.findManyByOwnerId(ownerId)

    if(!sensors) {
      return left(new NotFoundException("Sensors not found."))
    }

    return right({
      sensors
    })
  }
}