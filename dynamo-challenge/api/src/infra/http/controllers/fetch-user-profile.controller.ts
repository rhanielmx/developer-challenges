import {
  Body,
  Controller,
  Get,
  UseGuards
} from '@nestjs/common';
import { FetchUserProfileUseCase } from '../../../domain/industry/application/use-cases/fetch-user-profile';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../../auth/current-user-decorator';
import { UserPayload } from '../../auth/jwt.strategy';
import { first } from 'rxjs';


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
      user: {
        firstName,
        lastName,
        email,
        avatarUrl
      }
    }
  }
}
