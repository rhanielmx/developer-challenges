import {
  Body,
  Controller,
  Get,
  UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'
import { FetchSensorsUseCase } from '@/domain/industry/application/use-cases/fetch-sensors'

@Controller('/sensors')
@UseGuards(AuthGuard('jwt'))
export class FetchSensorsController {
  constructor(private fetchSensor: FetchSensorsUseCase) {}

  @Get()
  async handle(
    @CurrentUser() loggedUser: UserPayload
  ) {
    const { sub: userId } = loggedUser
    const result = await this.fetchSensor.execute({ownerId: userId})

    if(result.isLeft()){
      throw result.value
    }

    const sensors = result.value.sensors.map((sensor)=>{
      return {
        id: sensor.id.toValue(),
        name: sensor.name,
        model: sensor.model,
        status: sensor.status,
        createdAt: sensor.createdAt,
      }
    })
    
    
    return {
      sensors
    }
  }
}
