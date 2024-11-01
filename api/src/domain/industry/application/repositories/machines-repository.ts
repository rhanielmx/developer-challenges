import { Machine } from '../../enterprise/entities/machine'

export abstract class MachinesRepository {
  abstract findById(id: string): Promise<Machine | null>
  abstract findManyByOwnerId(ownerId: string): Promise<Machine[]>
  abstract save(machine: Machine): Promise<void>
  abstract create(machine: Machine): Promise<void>
  abstract delete(machine: Machine): Promise<void>
}