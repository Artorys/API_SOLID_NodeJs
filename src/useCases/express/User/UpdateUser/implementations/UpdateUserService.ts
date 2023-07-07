import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../../../../../repositories/User/IUserRepository";
import { IUserService } from "../../IUserService";

export class UpdateUserService implements IUserService{
  execute(arg?: string | IUserRepositoryCreate): Promise<void | IUserRepositoryRead | IUserRepositoryRead[]> {
    
  }
  constructor(public userRepository: IUserRepository){}
}