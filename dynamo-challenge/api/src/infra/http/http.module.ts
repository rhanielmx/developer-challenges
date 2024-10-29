import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthenticateController } from "./controllers/authenticate.controller";
import { CreateAccountController } from "./controllers/create-account.controller";
import { CreateMachineController } from "./controllers/create-machine.controller";
import { DeleteMachineController } from "./controllers/delete-machine.controller";
import { UpdateMachineController } from "./controllers/update-machine.controller";
import { LinkSensorToMonitoringPointController } from "./controllers/link-sensor-to-monitoring-point.controller";
import { CreateMonitoringPointController } from "./controllers/create-monitoring-points.controller";
import { CreateMachineUseCase } from '../../domain/industry/application/use-cases/create-machine';
import { CreateSensorUseCase } from '../../domain/industry/application/use-cases/create-sensor';
import { CreateSensorController } from "./controllers/create-sensor.controller";
import { CreateMonitoringPointUseCase } from '../../domain/industry/application/use-cases/create-monitoring-point';

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
    CreateSensorController
  ],
  providers: [
    CreateMachineUseCase,
    CreateSensorUseCase,
    CreateMonitoringPointUseCase
  ]
})

export class HttpModule {}