import { Injectable } from '@nestjs/common'
import { Either, right } from '../../../../core/either'
import { User } from "../../enterprise/entities/user"
import { UsersRepository } from '../repositories/users-repository'

interface CreateUserUseCaseRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  avatarUrl?: string
}

type CreateUserUseCaseResponse = Either<
  null,
  {
    user: User
  }
>

@Injectable()
export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

    async execute({
      firstName,
      lastName,
      email,
      password,
      avatarUrl
    }:CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse>{
      const user = User.create({
        firstName,
        lastName,
        email,
        password,
        avatarUrl
      })

      this.usersRepository.create(user)

      return right({
        user
      })
    }
}

