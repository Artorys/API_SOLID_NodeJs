import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead, IUserRepositoryUpdate } from "../../../repositories/User/IUserRepository";


export interface IUserService{
  execute(arg1?: IUserRepositoryCreate | string,arg2?: IUserRepositoryUpdate) : Promise<IUserRepositoryRead | Array<IUserRepositoryRead> | void>
  userRepository : IUserRepository
}