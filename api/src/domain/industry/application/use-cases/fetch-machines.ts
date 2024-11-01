import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { Either, left, right } from '@/core/either'
import { Machine } from "../../enterprise/entities/machine"
import { MachinesRepository } from "../repositories/machines-repository"

interface FetchMachinesUseCaseRequest {
  ownerId: string
}

type FetchMachinesUseCaseResponse = Either<
  NotFoundException | UnauthorizedException,
  {
    machines: Machine[]
  }
>

@Injectable()
export class FetchMachinesUseCase {
  constructor(
    private machinesRepository: MachinesRepository
  ){}

  async execute({
    ownerId,
  }: FetchMachinesUseCaseRequest): Promise<FetchMachinesUseCaseResponse>{
    const machines = await this.machinesRepository.findManyByOwnerId(ownerId)

    if(!machines) {
      return left(new NotFoundException("Machines not found."))
    }

    return right({
      machines
    })
  }
}