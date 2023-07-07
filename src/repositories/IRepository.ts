import { TEntities } from "../entities/EntitiesType"

export interface IRepository{
  save(data : {}): Promise<TEntities>
  readAll(): Promise<null | Array<TEntities>>
  readOne(id : string) : Promise<null | TEntities>
  deleteOne(id : string): Promise<null | TEntities>
  updateOne(id : string,data : TEntities) : Promise<null | TEntities>
}