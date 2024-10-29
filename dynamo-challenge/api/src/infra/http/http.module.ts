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
  ],
  providers: [CreateMachineUseCase]
})

export class HttpModule {}