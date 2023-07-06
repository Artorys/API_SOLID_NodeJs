import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../../../repositories/User/IUserRepository";


export interface IUserService{
  execute(arg?: IUserRepositoryCreate | string) : Promise<IUserRepositoryRead | Array<IUserRepositoryRead> | void>
  userRepository : IUserRepository
}