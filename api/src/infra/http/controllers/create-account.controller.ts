import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import {
  UsePipes,
  ConflictException,
  Body,
  Controller,
  Post,
} from '@nestjs/common'
import { hash } from 'bcryptjs'
import { z } from 'zod'

const createAccountBodySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  avatarUrl: z.string().optional(),
})

type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Body() body: CreateAccountBodySchema) {
    const { firstName, lastName, email, password, avatarUrl } =
      createAccountBodySchema.parse(body);

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    const hashedPassword = await hash(password, 8);

    if (userWithSameEmail) {
      throw new ConflictException(
        'User with same email address already exists',
      );
    }

    await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        avatarUrl,
      },
    });
  }
}
