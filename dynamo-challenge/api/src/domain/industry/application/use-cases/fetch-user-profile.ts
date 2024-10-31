import { Injectable, NotFoundException } from '@nestjs/common'
import { Either, right } from '../../../../core/either'
import { User } from "../../enterprise/entities/user"
import { UsersRepository } from '../repositories/users-repository'

interface FetchUserProfileUseCaseRequest {
  userId: string
}

type FetchUserProfileUseCaseResponse = Either<
  null,
  {
    user: User
  }
>

@Injectable()
export class FetchUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

    async execute({
      userId
    }:FetchUserProfileUseCaseRequest): Promise<FetchUserProfileUseCaseResponse>{
    
      const user = await this.usersRepository.findById(userId)

      if(!user){
        throw new NotFoundException('User Not Found.')
      }

      return right({
        user
      })
    }
}

