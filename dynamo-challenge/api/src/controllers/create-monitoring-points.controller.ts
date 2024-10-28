import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { PrismaService } from '../prisma/prisma.service'
import { Body, Controller, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { z } from 'zod'

const createMonitoringPointSchema = z.array(z.object({
  machineId: z.number().min(1),
  name: z.string()
}))

type CreateMonitoringPointSchema = z.infer<typeof createMonitoringPointSchema>

const bodyValidationPipe = new ZodValidationPipe(createMonitoringPointSchema)

@Controller('/machines/monitoring-points')
@UseGuards(AuthGuard('jwt'))
export class CreateMonitoringPointController {
  constructor(private prisma: PrismaService){}

  @Post()
  async handle(@Body(bodyValidationPipe) body: CreateMonitoringPointSchema){
    if(body.length < 2) {
      throw new Error("You need to create at least two monitoring points.")
    }
  
    await this.prisma.monitoringPoint.createMany({
      data: body
    })
  }
}