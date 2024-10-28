import { CurrentUser } from '../auth/current-user-decorator';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { PrismaService } from '../prisma/prisma.service'
import { Body, Controller, Param, Patch, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { SensorModel, MachineType } from '@prisma/client';
import { z } from 'zod'
import { UserPayload } from '../auth/jwt.strategy';

const linkSensorToMonitoringPointSchema = z.object({
  sensorId: z.number()
})

type linkSensorToMonitoringPointSchema = z.infer<typeof linkSensorToMonitoringPointSchema>

const bodyValidationPipe = new ZodValidationPipe(linkSensorToMonitoringPointSchema)

@Controller('/machines/monitoring-points/:id')
@UseGuards(AuthGuard('jwt'))
export class LinkSensorToMonitoringPointController {
  constructor(private prisma: PrismaService){}

  @Patch()
  async handle(
    @Body(bodyValidationPipe) body: linkSensorToMonitoringPointSchema,
    @Param('id') id: string,
    @CurrentUser() user: UserPayload
  ){
    const { sensorId } = body
    const { sub: userId } = user

    const monitoringPoint = await this.prisma.monitoringPoint.findUnique({
      where: { id: +id },
      include: {
        machine: {
          include: {
            monitoredBy: true,
          }
        }
      }
    })

    if(!monitoringPoint) {
      throw new Error("Monitoring point not found.")
    }

    if(monitoringPoint.machine.monitoredBy.id !== userId) {
      throw new Error("You can only update monitoring points of machines you own.")
    }

    const sensor = await this.prisma.sensor.findUnique({
      where: { id: sensorId },
    })

    if(!sensor) {
      throw new Error("Sensor not found.")
    }

    const sensorCannotBeLinked =
      (monitoringPoint.machine.type === MachineType.PUMP
        && sensor.model !== SensorModel.HF)

    if(sensorCannotBeLinked) {
      throw new Error("Machines of type PUMP can only have HF+ sensors linked to them.")
    }
  
    await this.prisma.monitoringPoint.update({
      data: {
        sensorId
      },
      where: {
        id: +id
      }
    })
  }
}