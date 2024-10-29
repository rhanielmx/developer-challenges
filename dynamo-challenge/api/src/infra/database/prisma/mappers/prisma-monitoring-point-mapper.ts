import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { MonitoringPoint } from '../../../../domain/industry/enterprise/entities/monitoring-point';
import { MonitoringPoint as PrismaMonitoringPoint, type Prisma } from "@prisma/client";

export class PrismaMonitoringPointMapper{
  static toDomain(raw: PrismaMonitoringPoint): MonitoringPoint {
    return MonitoringPoint.create({
      name: raw.name,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      machineId: new UniqueEntityID(raw.machineId),
      sensorId: raw.sensorId ? new UniqueEntityID(raw.sensorId) : null
    })
  }

  static toPrisma(monitoringPoint: MonitoringPoint): Prisma.MonitoringPointUncheckedCreateInput {
    return {
      id: monitoringPoint.id.toValue(),
      name: monitoringPoint.name,
      createdAt: monitoringPoint.createdAt,
      updatedAt: monitoringPoint.updatedAt,
      machineId: monitoringPoint.machineId.toValue(),
    }
  }
}