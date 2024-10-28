import { Controller, Delete, Param, UseGuards } from "@nestjs/common"
import { AuthGuard } from '@nestjs/passport'
import { PrismaService } from '../prisma/prisma.service'
import { CurrentUser } from '../auth/current-user-decorator'
import { UserPayload } from '../auth/jwt.strategy'

@Controller('/machines/:id')
@UseGuards(AuthGuard('jwt'))
export class DeleteMachineController {
  constructor(private prisma: PrismaService){}

  @Delete()
  async handle(
    @CurrentUser() user: UserPayload,
    @Param('id') id: number
  ) {
    const { sub: userId } = user

    const machine = await this.prisma.machine.findUnique({
      where: {
        id: +id,
      }
    })

    if(machine.userId !== userId) {
      throw new Error("You're only allowed to delete machines you own.")
    }

    await this.prisma.machine.delete({
      where: {
        id: +id
      }
    })
  }
}