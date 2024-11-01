import { Body, Controller, Post, UseGuards } from "@nestjs/common"
import { AuthGuard } from '@nestjs/passport'
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { CreateMachineUseCase } from '@/domain/industry/application/use-cases/create-machine'
import { MachineStatus, MachineType } from "@prisma/client"
import { z } from "zod"

const createMachineSchema = z.object({
  name: z.string(),
  type: z.nativeEnum(MachineType),
  status: z.nativeEnum(MachineStatus).optional()
})

type CreateMachineSchema = z.infer<typeof createMachineSchema>

const bodyValidationSchema = new ZodValidationPipe(createMachineSchema)

@Controller('/machines')
@UseGuards(AuthGuard('jwt'))
export class CreateMachineController {
  constructor(private createMachine: CreateMachineUseCase){}

  @Post()
  async handle(
    @Body(bodyValidationSchema) body: CreateMachineSchema,
    @CurrentUser() user: UserPayload
  ) {
    const { name, type, status } = body
    const { sub: userId } = user

    const result = await this.createMachine.execute({
      name,
      type,
      status,
      ownerId: userId
    })
    
    if(result.isLeft()){
      throw result.value
    }
  }
}