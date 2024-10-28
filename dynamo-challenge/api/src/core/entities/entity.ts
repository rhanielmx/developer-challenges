import { UniqueEntityID } from "./unique-entity-id"

export abstract class Entity<Props> {
  private _id: UniqueEntityID
  private props: Props

  constructor(props: Props, id?: UniqueEntityID){
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  public equals(entity: Entity<unknown>){
    if(entity===this){
      return true
    }

    if(entity._id === this._id){
      return true
    }

    return false
  }
}