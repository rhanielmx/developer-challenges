import { Injectable } from '@nestjs/common';
import { Either, right } from '@/core/either';
import { Machine } from "../../enterprise/entities/machine"
import { MachinesRepository } from '../repositories/machines-repository';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface CreateMachineUseCaseRequest {
  name: string
  type: "PUMP" | "FAN"
  ownerId: string
}

type CreateMachineUseCaseResponse = Either<
  null,
  {
    machine: Machine
  }
>

@Injectable()
export class CreateMachineUseCase {
  constructor(private machinesRepository: MachinesRepository) {}

    async execute({
      name,
      type,
      ownerId
    }:CreateMachineUseCaseRequest): Promise<CreateMachineUseCaseResponse>{
      const machine = Machine.create({
        name,
        type,
        ownerId: new UniqueEntityID(ownerId),
      })

      this.machinesRepository.create(machine)

      return right({
        machine
      })
    }
}

