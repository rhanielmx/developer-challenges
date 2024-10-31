import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Either, left, right } from '../../../../core/either';
import { MachinesRepository } from '../repositories/machines-repository';

interface UpdateMachineUseCaseRequest {
  name?: string
  type?: "PUMP" | "FAN"
  ownerId: string
  machineId: string
}

type UpdateMachineUseCaseResponse = Either<
  NotFoundException,
  null
>

@Injectable()
export class UpdateMachineUseCase {
  constructor(private machinesRepository: MachinesRepository) {}

    async execute({
      name,
      type,
      machineId,
      ownerId
    }: UpdateMachineUseCaseRequest): Promise<UpdateMachineUseCaseResponse> {
      const machine = await this.machinesRepository.findById(machineId)

      if(!machine){
        return left(new NotFoundException())
      }

      if(machine.ownerId.toValue() !== ownerId){
        return left(new BadRequestException())
      }

      if(name){
        machine.name = name
      }

      if(type){
        machine.type = type
      }

      this.machinesRepository.save(machine)

      return right(null)
    }
}

