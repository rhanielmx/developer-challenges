import {
  Body,
  Controller,
  Get,
  UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { FetchMachinesUseCase } from '@/domain/industry/application/use-cases/fetch-machines'

@Controller('/machines')
@UseGuards(AuthGuard('jwt'))
export class FetchMachinesController {
  constructor(private fetchMachine: FetchMachinesUseCase) {}

  @Get()
  async handle(
    @CurrentUser() loggedUser: UserPayload
  ) {
    const { sub: userId } = loggedUser
    const result = await this.fetchMachine.execute({ownerId: userId})

    if(result.isLeft()){
      throw result.value
    }

    const machines = result.value.machines.map((machine)=>{
      return {
        id: machine.id.toValue(),
        name: machine.name,
        type: machine.type,
        status: machine.status,
        createdAt: machine.createdAt,
      }
    })
    
    
    return {
      machines
    }
  }
}
