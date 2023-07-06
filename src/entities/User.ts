import {Exclude} from "class-transformer"

export class User{
  id : number
  name : string
  email : string
  @Exclude()
  password : string
  createdAt : Date
  updatedAt : Date
  deletedAt : Date | null
  constructor(props : User){
    this.id = props.id
    this.name = props.name
    this.email = props.email
    this.password = props.password
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}