import { Body, Controller, Param, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { MachineType } from "@prisma/client";
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { PrismaService } from '../prisma/prisma.service';
import { CurrentUser } from '../auth/current-user-decorator';
import { UserPayload } from '../auth/jwt.strategy';
import { z } from "zod";

const updateMachineSchema = z.object({
  name: z.string().optional(),
  type: z.nativeEnum(MachineType).optional()
})

type UpdateMachineSchema = z.infer<typeof updateMachineSchema>

const bodyValidationSchema = new ZodValidationPipe(updateMachineSchema)

@Controller('/machines/:id')
@UseGuards(AuthGuard('jwt'))
export class UpdateMachineController {
  constructor(private prisma: PrismaService){}

  @Put()
  async handle(
    @Body(bodyValidationSchema) body:UpdateMachineSchema,
    @CurrentUser() user: UserPayload,
    @Param('id') id: number
  ) {
    const { name, type } = body
    const { sub: userId } = user

    const machine = await this.prisma.machine.findUnique({
      where: {
        id: +id,
      }
    })

    if(machine.userId !== userId) {
      throw new Error("You're only allowed to update machines you own.")
    }

    await this.prisma.machine.update({
      data: {
        name,
        type,
        userId
      },
      where: {
        id: +id
      }
    })
  }
}