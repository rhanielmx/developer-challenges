import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { LinkSensorToMonitoringPointUseCase } from '@/domain/industry/application/use-cases/link-sensor-to-monitoring-point'

import { Body, Controller, Param, Patch, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { z } from 'zod'


const linkSensorToMonitoringPointSchema = z.object({
  sensorId: z.string()
})

type linkSensorToMonitoringPointSchema = z.infer<typeof linkSensorToMonitoringPointSchema>

const bodyValidationPipe = new ZodValidationPipe(linkSensorToMonitoringPointSchema)

@Controller('/machines/monitoring-points/:monitoringPointId')
@UseGuards(AuthGuard('jwt'))
export class LinkSensorToMonitoringPointController {
  constructor(private linkSensorToMonitoringPoints: LinkSensorToMonitoringPointUseCase){}

  @Patch()
  async handle(
    @Body(bodyValidationPipe) body: linkSensorToMonitoringPointSchema,
    @Param('monitoringPointId') monitoringPointId: string,
    @CurrentUser() user: UserPayload
  ){
    const { sensorId } = body
    const { sub: userId } = user

    const result = await this.linkSensorToMonitoringPoints.execute({
      monitoringPointId,
      sensorId,
      userId,
    })

    if(result.isLeft()){
      throw result.value
    }
  }
}