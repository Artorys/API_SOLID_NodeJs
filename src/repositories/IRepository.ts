import { EntitiesType } from "../entities/types/EntitiesType"

export interface IRepository{
  save(data : {}): Promise<EntitiesType>
  readAll(): Promise<null | Array<EntitiesType>>
  readOne(id : string) : Promise<null | EntitiesType>
  deleteOne(id : string): Promise<null | EntitiesType>
  updateOne(id : string,data : {}) : Promise<null | EntitiesType>
  checkEntityExistsById(id : string) : Promise<boolean>
}