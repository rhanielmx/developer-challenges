import { Injectable } from "@nestjs/common";
import { Either, right } from '@/core/either';
import { SensorsRepository } from "../repositories/sensors-repository";
import { Sensor } from "../../enterprise/entities/sensor";

interface CreateSensorUseCaseRequest {
  name: string
  model: "TCAG" | "TCAS" | "HF"
}

type CreateSensorUseCaseResponse = Either<
  null,
  {
    sensor: Sensor
  }
>

@Injectable()
export class CreateSensorUseCase {
  constructor(private sensorsRepository: SensorsRepository){}

  async execute({
    name,
    model
  }: CreateSensorUseCaseRequest): Promise<CreateSensorUseCaseResponse> {
    const sensor = Sensor.create({
      model,
      name
    })

    this.sensorsRepository.create(sensor)

    return right({
      sensor
    })
  }
}