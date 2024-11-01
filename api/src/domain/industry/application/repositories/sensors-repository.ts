import type { Sensor } from '../../enterprise/entities/sensor';

export abstract class SensorsRepository {
  abstract findById(id: string): Promise<Sensor | null>
  abstract findManyByOwnerId(ownerId: string): Promise<Sensor[]>
  abstract save(sensor: Sensor): Promise<void>
  abstract create(sensor: Sensor): Promise<void>
  abstract delete(sensor: Sensor): Promise<void>
}