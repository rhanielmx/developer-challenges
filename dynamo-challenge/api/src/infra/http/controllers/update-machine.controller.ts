import { Body, Controller, Param, Put, UseGuards } from "@nestjs/common"
import { AuthGuard } from '@nestjs/passport'
import { MachineType } from "@prisma/client"
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { CurrentUser } from '../../auth/current-user-decorator'
import { UserPayload } from '../../auth/jwt.strategy'
import { z } from "zod"
import { UpdateMachineUseCase } from '../../../domain/industry/application/use-cases/update-machine'

const updateMachineSchema = z.object({
  name: z.string().optional(),
  type: z.nativeEnum(MachineType).optional()
})

type UpdateMachineSchema = z.infer<typeof updateMachineSchema>

const bodyValidationSchema = new ZodValidationPipe(updateMachineSchema)

@Controller('/machines/:machineId')
@UseGuards(AuthGuard('jwt'))
export class UpdateMachineController {
  constructor(private updateMachine: UpdateMachineUseCase){}

  @Put()
  async handle(
    @Body(bodyValidationSchema) body:UpdateMachineSchema,
    @CurrentUser() user: UserPayload,
    @Param('machineId') machineId: string
  ) {
    const { name, type } = body
    const { sub: userId } = user

    this.updateMachine.execute({
      name,
      type,
      ownerId: userId,
      machineId
    })
    
  }
}