import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { CurrentUser } from '../../auth/current-user-decorator';
import { UserPayload } from '../../auth/jwt.strategy';
import { z } from "zod";
import { CreateMachineUseCase } from '../../../domain/industry/application/use-cases/create-machine';
import { MachineType } from "@prisma/client";

const createMachineSchema = z.object({
  name: z.string(),
  type: z.nativeEnum(MachineType)
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
    const { name, type } = body
    const { sub: userId } = user

    await this.createMachine.execute({
      name,
      type,
      ownerId: userId
    })    
  }
}