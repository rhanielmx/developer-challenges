import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { MachinesRepository } from '../../domain/industry/application/repositories/machines-repository';
import { PrismaMachinesRepository } from "./prisma/repositories/prisma-machines-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: MachinesRepository,
      useClass: PrismaMachinesRepository
    }
  ],
  exports: [
    PrismaService,
    MachinesRepository
  ]
})

export class DatabaseModule {}