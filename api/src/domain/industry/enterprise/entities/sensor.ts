import { Optional } from '@/core/types/optional'
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface SensorProps {
  name: string
  model: "TCAG" | "TCAS" | "HF"
  status?: "ACTIVE" | "INACTIVE"
  createdAt: Date
  updatedAt?: Date | null
  monitoringPointId: UniqueEntityID
}

export class Sensor extends Entity<SensorProps> {
  get name(){
    return this.props.name
  }

  set name(name: string){
    this.props.name = name
  }

  get monitoringPointId() {
    return this.props.monitoringPointId
  }

  get model(){
    return this.props.model
  }

  set model(model: "TCAG" | "TCAS" | "HF"){
    this.props.model = model
  }

   get status(){
    return this.props.status
  }

  set status(status: "ACTIVE" | "INACTIVE"){
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
    props: Optional<SensorProps, 'createdAt'>,
    id?: UniqueEntityID  
  ) {
    const sensor = new Sensor(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        status: props.status ?? "INACTIVE"
      },
      id
    )

    return sensor
  }
  
}