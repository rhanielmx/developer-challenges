import { Module } from "@nestjs/common"
import { DatabaseModule } from "../database/database.module"
import { AuthenticateController } from "./controllers/authenticate.controller"
import { CreateAccountController } from "./controllers/create-account.controller"
import { CreateMachineController } from "./controllers/create-machine.controller"
import { DeleteMachineController } from "./controllers/delete-machine.controller"
import { UpdateMachineController } from "./controllers/update-machine.controller"
import { LinkSensorToMonitoringPointController } from "./controllers/link-sensor-to-monitoring-point.controller"
import { CreateMonitoringPointController } from "./controllers/create-monitoring-points.controller"
import { CreateMachineUseCase } from '../../domain/industry/application/use-cases/create-machine'
import { CreateSensorUseCase } from '../../domain/industry/application/use-cases/create-sensor'
import { CreateSensorController } from "./controllers/create-sensor.controller"
import { CreateMonitoringPointUseCase } from '../../domain/industry/application/use-cases/create-monitoring-point'
import { LinkSensorToMonitoringPointUseCase } from '../../domain/industry/application/use-cases/link-sensor-to-monitoring-point'
import { UpdateMachineUseCase } from '../../domain/industry/application/use-cases/update-machine'
import { CreateUserUseCase } from '../../domain/industry/application/use-cases/create-user'
import { FetchUserProfileUseCase } from '../../domain/industry/application/use-cases/fetch-user-profile';
import { FetchUserProfileController } from "./controllers/fetch-user-profile.controller"

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateMachineController,
    UpdateMachineController,
    DeleteMachineController,
    CreateMonitoringPointController,
    LinkSensorToMonitoringPointController,
    CreateSensorController,
    FetchUserProfileController
  ],
  providers: [
    CreateMachineUseCase,
    CreateSensorUseCase,
    CreateMonitoringPointUseCase,
    CreateUserUseCase,
    LinkSensorToMonitoringPointUseCase,
    UpdateMachineUseCase,
    FetchUserProfileUseCase
  ]
})

export class HttpModule {}