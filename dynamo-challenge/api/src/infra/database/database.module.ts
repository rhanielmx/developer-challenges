import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma/prisma.service"
import { MachinesRepository } from '../../domain/industry/application/repositories/machines-repository'
import { PrismaMachinesRepository } from "./prisma/repositories/prisma-machines-repository"
import { SensorsRepository } from '../../domain/industry/application/repositories/sensors-repository'
import { PrismaSensorsRepository } from "./prisma/repositories/prisma-sensors-repository"
import { MonitoringPointsRepository } from '../../domain/industry/application/repositories/monitoring-points-repository'
import { PrismaMonitoringPointsRepository } from "./prisma/repositories/prisma-monitoring-points-repository"

@Module({
  providers: [
    PrismaService,
    {
      provide: MachinesRepository,
      useClass: PrismaMachinesRepository
    },
    {
      provide: SensorsRepository,
      useClass: PrismaSensorsRepository
    },
    {
      provide: MonitoringPointsRepository,
      useClass: PrismaMonitoringPointsRepository
    }  ],
  exports: [
    PrismaService,
    MachinesRepository,
    SensorsRepository,
    MonitoringPointsRepository
  ]
})

export class DatabaseModule {}