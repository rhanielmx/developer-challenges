import { Optional } from '../../../../core/types/optional';
import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

export interface MonitoringPointProps {
  name: string
  machineId: UniqueEntityID
  sensorId?: UniqueEntityID | null
  createdAt: Date
  updatedAt?: Date | null
}

export class MonitoringPoint extends Entity<MonitoringPointProps> {
  get machineId(){
    return this.props.machineId
  }

  get sensorId(){
    return this.props.sensorId
  }

  set sensorId(sensorId: UniqueEntityID | null | undefined){
    this.props.sensorId = sensorId
    this.touch()
  }  

  get name(){
    return this.props.name
  }

  set name(name: string){
    this.props.name = name
    this.touch()
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
    props: Optional<MonitoringPointProps, 'createdAt'>,
    id?: UniqueEntityID  
  ) {
    const monitoringPoint = new MonitoringPoint(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    )

    return monitoringPoint
  }
  
}