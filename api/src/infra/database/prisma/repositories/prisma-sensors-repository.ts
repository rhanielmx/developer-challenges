import { Sensor } from '../../../../domain/industry/enterprise/entities/sensor';
import { SensorsRepository } from '../../../../domain/industry/application/repositories/sensors-repository';
import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma.service';
import { PrismaSensorMapper } from '../mappers/prisma-sensor-mapper';

@Injectable()
export class PrismaSensorsRepository implements SensorsRepository {
  constructor(private prisma: PrismaService){}
  
  async findById(id: string): Promise<Sensor | null> {
    const sensor = await this.prisma.sensor.findUnique({
      where: {
        id
      }
    })

    if(!sensor){
      return null
    }

    return PrismaSensorMapper.toDomain(sensor)
  }

  async findManyByOwnerId(ownerId: string): Promise<Sensor[]> {  
    const sensors = await this.prisma.sensor.findMany({
      where: {
        monitoringPoint: {
          machine: {
            ownerId
          }
        }
      }
    })

    return sensors.map(PrismaSensorMapper.toDomain)
  }

  async save(sensor: Sensor): Promise<void> {
    const data = PrismaSensorMapper.toPrisma(sensor)

    await this.prisma.sensor.update({
      data,
      where: {
        id: data.id
      }
    })    
  }

  async create(sensor: Sensor): Promise<void> {
    const data = PrismaSensorMapper.toPrisma(sensor)

    await this.prisma.sensor.create({
      data
    })
  }

  async delete(sensor: Sensor): Promise<void> {
    const data = PrismaSensorMapper.toPrisma(sensor)

    await this.prisma.sensor.delete({
      where: {
        id: data.id
      }
    })
  }
}