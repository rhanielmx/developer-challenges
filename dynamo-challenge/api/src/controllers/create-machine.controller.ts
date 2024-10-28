import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { MachineType } from "@prisma/client";
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { PrismaService } from '../prisma/prisma.service';
import { CurrentUser } from '../auth/current-user-decorator';
import { UserPayload } from '../auth/jwt.strategy';
import { z } from "zod";

const createMachineSchema = z.object({
  name: z.string(),
  type: z.nativeEnum(MachineType)
})

type CreateMachineSchema = z.infer<typeof createMachineSchema>

const bodyValidationSchema = new ZodValidationPipe(createMachineSchema)

@Controller('/machines')
@UseGuards(AuthGuard('jwt'))
export class CreateMachineController {
  constructor(private prisma: PrismaService){}

  @Post()
  async handle(
    @Body(bodyValidationSchema) body:CreateMachineSchema,
    @CurrentUser() user: UserPayload
  ) {
    const { name, type } = body
    const { sub: userId } = user

    const machine = await this.prisma.machine.create({
      data: {
        name,
        type,
        userId
      }
    })

    return {
      machineId: machine.id
    }
  }
}