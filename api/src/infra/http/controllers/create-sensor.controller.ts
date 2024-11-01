import { AuthGuard } from '@nestjs/passport'
import { Body, Controller, Post, UseGuards } from "@nestjs/common"
import { SensorModel } from '@prisma/client'
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { z } from 'zod'
import { CreateSensorUseCase } from '@/domain/industry/application/use-cases/create-sensor'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import type { UserPayload } from '@/infra/auth/jwt.strategy'

const createSensorSchema = z.object({
  name: z.string(),
  model: z.nativeEnum(SensorModel),
  monitoringPointId: z.string()
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
    @CurrentUser() user: UserPayload
  ){
    const { name, model, monitoringPointId } = body
    const { sub: userId } = user

    const result = await this.createSensor.execute({
      name,
      model,
      monitoringPointId,
      ownerId: userId
    })

    if(result.isLeft()){
      throw result.value
    }
  }
}