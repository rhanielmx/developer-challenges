import {
  Body,
  Controller,
  Get,
  UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { FetchUserProfileUseCase } from '@/domain/industry/application/use-cases/fetch-user-profile'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.strategy'

@Controller('/profile')
@UseGuards(AuthGuard('jwt'))
export class FetchUserProfileController {
  constructor(private fetchUserProfile: FetchUserProfileUseCase) {}

  @Get()
  async handle(
    @CurrentUser() loggedUser: UserPayload
  ) {
    const { sub: userId } = loggedUser
    const result = await this.fetchUserProfile.execute({userId})

    if(result.isLeft()){
      throw result.value
    }

    const { firstName, lastName, email, avatarUrl } = result.value.user
    
    return {
      firstName,
      lastName,
      email,
      avatarUrl
    }
  }
}
