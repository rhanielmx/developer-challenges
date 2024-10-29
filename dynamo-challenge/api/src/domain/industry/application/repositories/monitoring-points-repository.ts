import { PaginationParams } from '../../../../core/repositories/pagination-params';
import { MonitoringPoint } from '../../enterprise/entities/monitoring-point'

export abstract class MonitoringPointsRepository {
  abstract findById(id: string): Promise<MonitoringPoint | null>
  abstract findManyRecent(params: PaginationParams): Promise<MonitoringPoint[]>
  abstract save(monitoringpoint: MonitoringPoint): Promise<void>
  abstract create(monitoringpoint: MonitoringPoint): Promise<void>
  abstract delete(monitoringpoint: MonitoringPoint): Promise<void>
}