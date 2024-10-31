import { AuthGuard } from '@nestjs/passport'
import { Body, Controller, Post, UseGuards } from "@nestjs/common"
import { SensorModel } from '@prisma/client'
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { z } from 'zod'
import { CreateSensorUseCase } from '@/domain/industry/application/use-cases/create-sensor'

const createSensorSchema = z.object({
  name: z.string(),
  model: z.nativeEnum(SensorModel)
})

type CreateSensorSchema = z.infer<typeof createSensorSchema>

const bodyValidationSchema = new ZodValidationPipe(createSensorSchema)

@Controller('/sensors')
@UseGuards(AuthGuard('jwt'))
export class CreateSensorController{
  constructor(private createSensor: CreateSensorUseCase){}

  @Post()
  async handle(
    @Body(bodyValidationSchema) body: CreateSensorSchema,
  ){
    const { name, model } = body

    const result = await this.createSensor.execute({
      name,
      model
    })

    if(result.isLeft()){
      throw result.value
    }
  }
}