
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { Machine } from '../../../../domain/industry/enterprise/entities/machine';
import type { Prisma, Machine as PrismaMachine } from '@prisma/client'

export class PrismaMachineMapper {
  static toDomain(raw: PrismaMachine): Machine {
    return Machine.create(
      {
        name: raw.name,
        type: raw.type,
        ownerId: new UniqueEntityID(raw.ownerId),       
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(machine: Machine): Prisma.MachineUncheckedCreateInput {
    return {
      id: machine.id.toValue(),
      name: machine.name,
      type: machine.type,
      ownerId: machine.ownerId.toValue(),
      createdAt: machine.createdAt,
      updatedAt: machine.updatedAt,
    }
  }
}
