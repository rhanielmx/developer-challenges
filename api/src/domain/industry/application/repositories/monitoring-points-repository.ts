import { PaginationParams } from '@/core/repositories/pagination-params'
import { MonitoringPoint } from '../../enterprise/entities/monitoring-point'

export abstract class MonitoringPointsRepository {
  abstract findById(id: string): Promise<MonitoringPoint | null>
  abstract findManyRecent(params: PaginationParams, userId: string): Promise<MonitoringPoint[]>
  abstract linkToSensor(id: string, sensorId: string): Promise<void>
  abstract save(monitoringPoint: MonitoringPoint): Promise<void>
  abstract create(monitoringPoint: MonitoringPoint): Promise<void>
  abstract delete(monitoringPoint: MonitoringPoint): Promise<void>
}