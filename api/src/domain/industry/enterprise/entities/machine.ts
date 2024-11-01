import { Optional } from '@/core/types/optional'
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface MachineProps {
  name: string
  type: "PUMP" | "FAN"
  status?: "ACTIVE" | "INACTIVE" | "ERROR"
  ownerId: UniqueEntityID
  createdAt: Date
  updatedAt?: Date | null
}

export class Machine extends Entity<MachineProps> {
  get ownerId() {
    return this.props.ownerId
  }
  
  get name(){
    return this.props.name
  }

  set name(name: string){
    this.props.name = name
    this.touch()
  }

  get type(){
    return this.props.type
  }

  set type(type: "PUMP" | "FAN"){
    this.props.type = type
    
  }

  get status(){
    return this.props.status
  }

  set status(status: "ACTIVE" | "INACTIVE" | "ERROR"){
    this.props.status = status
    
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<MachineProps, 'createdAt'>,
    id?: UniqueEntityID  
  ) {
    const machine = new Machine(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        status: props.status ?? "ACTIVE"
      },
      id
    )

    return machine
  }
  
}