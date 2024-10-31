import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { MachinesRepository } from '../repositories/machines-repository'

interface UpdateMachineUseCaseRequest {
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
      machineId,
      ownerId
    }: UpdateMachineUseCaseRequest): Promise<UpdateMachineUseCaseResponse> {
      const machine = await this.machinesRepository.findById(machineId)

      if(!machine){
        return left(new NotFoundException('Machine not found.'))
      }

      if(machine.ownerId.toValue() !== ownerId){
        return left(new BadRequestException('You can only delete machines you own.'))
      }

      this.machinesRepository.delete(machine)

      return right(null)
    }
}

