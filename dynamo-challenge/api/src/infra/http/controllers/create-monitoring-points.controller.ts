import { PrismaService } from '../../database/prisma/prisma.service';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { z } from 'zod'

const createMonitoringPointSchema = z.array(z.object({
  name: z.string()
}))

type CreateMonitoringPointSchema = z.infer<typeof createMonitoringPointSchema>

const bodyValidationPipe = new ZodValidationPipe(createMonitoringPointSchema)

@Controller('/machines/:machineId/monitoring-points')
@UseGuards(AuthGuard('jwt'))
export class CreateMonitoringPointController {
  constructor(private prisma: PrismaService){}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateMonitoringPointSchema,
    @Param("machineId") machineId: string
  ){
    if(body.length < 2) {
      throw new Error("You need to create at least two monitoring points.")
    }

    const data = body.map(({name}) => {
      return {
        machineId,
        name
      }
    })
  
    await this.prisma.monitoringPoint.createMany({
      data
    })
  }
}