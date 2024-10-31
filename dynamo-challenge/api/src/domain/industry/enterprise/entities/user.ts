import { Optional } from '../../../../core/types/optional'
import { Entity } from '../../../../core/entities/entity'
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id'
import { hash } from 'bcryptjs'

export interface UserProps {
  firstName: string
  lastName: string
  email: string
  password: string
  avatarUrl?: string | null
  createdAt: Date
  updatedAt?: Date | null
}

export class User extends Entity<UserProps> {
  get firstName(){
    return this.props.firstName
  }

  set firstName(firstName: string){
    this.props.firstName = firstName
    this.touch()
  }

  get lastName(){
    return this.props.lastName
  }

  set lastName(lastName: string){
    this.props.lastName = lastName
    this.touch()
  }

  get fulName(){
    return `${this.props.firstName} ${this.props.lastName}`
  }

  get password(){
    return this.props.password
  }

  set password(password: string){
    this.props.password = password
    this.touch()
  }

  get avatarUrl(){
    return this.props.avatarUrl
  }

  set avatarUrl(avatarUrl: string | null | undefined){
    this.props.avatarUrl = avatarUrl
    this.touch()
  }

  get email(){
    return this.props.email
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
    props: Optional<UserProps, 'createdAt'>,
    id?: UniqueEntityID  
  ) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    )

    return user
  }
  
}