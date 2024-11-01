import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { User } from '@/domain/industry/enterprise/entities/user'
import type { Prisma, User as PrismaUser } from "@prisma/client"

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create({
      firstName: raw.firstName,
      lastName: raw.lastName,
      email: raw.email,
      password: raw.password,
      avatarUrl: raw.avatarUrl,
      createdAt: raw.createdAt,
    },
    new UniqueEntityID(raw.id)
  )
  }
  
  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toValue(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt
    }
  }
}