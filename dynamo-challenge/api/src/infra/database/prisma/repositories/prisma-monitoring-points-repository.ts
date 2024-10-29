import { PaginationParams } from '../../../../core/repositories/pagination-params'
import { MonitoringPointsRepository } from '../../../../domain/industry/application/repositories/monitoring-points-repository'
import { MonitoringPoint } from '../../../../domain/industry/enterprise/entities/monitoring-point'
import { Injectable } from "@nestjs/common"
import { PrismaService } from '../prisma.service'
import { PrismaMonitoringPointMapper } from '../mappers/prisma-monitoring-point-mapper'

@Injectable()
export class PrismaMonitoringPointsRepository implements MonitoringPointsRepository {
  constructor(private prisma: PrismaService){}  

  async findById(id: string): Promise<MonitoringPoint | null> {
    const monitoringPoint = await this.prisma.monitoringPoint.findUnique({
      where: {
        id
      }
    })

    if (!monitoringPoint) {
      return null
    }

    return PrismaMonitoringPointMapper.toDomain(monitoringPoint)
  }

  async findManyRecent({page}: PaginationParams, userId: string): Promise<MonitoringPoint[]> {
    const monitoringPoints = await this.prisma.monitoringPoint.findMany({
      where: {
        machine: {
          ownerId: userId
        }
      }, 
      take: 5,
      skip: (page - 1) * 5
    })

    return monitoringPoints.map(PrismaMonitoringPointMapper.toDomain)
  }

  async save(monitoringPoint: MonitoringPoint): Promise<void> {
    const data = PrismaMonitoringPointMapper.toPrisma(monitoringPoint)
    console.log(data)

    await this.prisma.monitoringPoint.update({
      data,
      where: {
        id: data.id
      }
    })
  }

  async linkToSensor(id: string, sensorId: string): Promise<void> {
    await this.prisma.monitoringPoint.update({
      where: { id },
      data: {
        sensor: { connect: { id: sensorId }}
      }
    })
  }

  async create(monitoringPoint: MonitoringPoint): Promise<void> {
    const data = PrismaMonitoringPointMapper.toPrisma(monitoringPoint)

    await this.prisma.monitoringPoint.create({
      data,
    })
  }
  
  async delete(monitoringPoint: MonitoringPoint): Promise<void> {
    const data = PrismaMonitoringPointMapper.toPrisma(monitoringPoint)

    await this.prisma.monitoringPoint.delete({
      where: {
        id: data.id
      }
    })
  }
}