import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Sensor } from '@/domain/industry/enterprise/entities/sensor'
import type { Prisma, Sensor as PrismaSensor } from "@prisma/client"

export class PrismaSensorMapper {
  static toDomain(raw: PrismaSensor): Sensor {
    return Sensor.create({
      name: raw.name,
      model: raw.model,
      status: raw.status,
      createdAt: raw.createdAt,
      monitoringPointId: new UniqueEntityID(raw.monitoringPointId)
    },
    new UniqueEntityID(raw.id)
  )
  }
  
  static toPrisma(sensor: Sensor): Prisma.SensorUncheckedCreateInput {
    return {
      id: sensor.id.toValue(),
      monitoringPointId: sensor.monitoringPointId.toValue(),
      name: sensor.name,
      model: sensor.model,
      status: sensor.status,
      createdAt: sensor.createdAt
    }
  }
}