import { CurrentUser } from '../../auth/current-user-decorator'
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { z } from 'zod'
import { UserPayload } from '../../auth/jwt.strategy'
import { CreateMonitoringPointUseCase } from '../../../domain/industry/application/use-cases/create-monitoring-point'

const createMonitoringPointSchema = z.object({
  name: z.string()
})

type CreateMonitoringPointSchema = z.infer<typeof createMonitoringPointSchema>

const bodyValidationPipe = new ZodValidationPipe(createMonitoringPointSchema)

@Controller('/machines/:machineId/monitoring-points')
@UseGuards(AuthGuard('jwt'))
export class CreateMonitoringPointController {
  constructor(private createMonitoringPoint: CreateMonitoringPointUseCase){}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateMonitoringPointSchema,
    @CurrentUser() user: UserPayload,
    @Param("machineId") machineId: string
  ){

    const { name } = body
    const { sub: userId } = user
    
    const result = await this.createMonitoringPoint.execute({
      name,
      machineId,
      userId
    })

    if(result.isLeft()){
      throw result.value
    }   
  }
}