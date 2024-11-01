import { Machine } from '../../../../domain/industry/enterprise/entities/machine';
import { MachinesRepository } from '../../../../domain/industry/application/repositories/machines-repository';
import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma.service';
import { PrismaMachineMapper } from '../mappers/prisma-machine-mapper';

@Injectable()
export class PrismaMachinesRepository implements MachinesRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Machine | null> {
    const machine = await this.prisma.machine.findUnique({
      where: {
        id
      }
    })

    if(!machine){
      return null
    }

    return PrismaMachineMapper.toDomain(machine)
  }

  async findManyByOwnerId(ownerId: string): Promise<Machine[]> {
    const machines = await this.prisma.machine.findMany({
      where: {
        ownerId
      }
    })

    return machines.map(PrismaMachineMapper.toDomain)
  }
  
  async create(machine: Machine): Promise<void> {
    const data = PrismaMachineMapper.toPrisma(machine)
    
    await this.prisma.machine.create({
      data,
    })
  }

  async save(machine: Machine): Promise<void> {
    const data = PrismaMachineMapper.toPrisma(machine)
    
    await this.prisma.machine.update({
      data,
      where: {
        id: data.id
      }
    })
  }
  
  async delete(machine: Machine): Promise<void> {
    const data = PrismaMachineMapper.toPrisma(machine)
    
    await this.prisma.machine.delete({
      where: {
        id: data.id
      }
    })
  }
}