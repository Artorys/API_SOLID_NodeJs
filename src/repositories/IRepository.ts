import { User } from "../entities/User"

export interface IRepository{
  save(data : {}): Promise<User>
  readAll(): Promise<null | Array<User>>
  readOne(id : string) : Promise<null | User>
  deleteOne(id : string): Promise<null | User>
}