import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../../../repositories/User/IUserRepository";


export interface IUserService{
  execute(data? : IUserRepositoryCreate) : Promise<IUserRepositoryRead | Array<IUserRepositoryRead | null>>
  userRepository : IUserRepository
}