import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './controllers/authenticate.controller'
import { envSchema } from './env'
import { CreateMachineController } from './controllers/create-machine.controller'
import { UpdateMachineController } from './controllers/update-machine.controller'
import { DeleteMachineController } from './controllers/delete-machine.controller'


@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateMachineController,
    UpdateMachineController,
    DeleteMachineController
  ],
  providers: [PrismaService],
})
export class AppModule {}
