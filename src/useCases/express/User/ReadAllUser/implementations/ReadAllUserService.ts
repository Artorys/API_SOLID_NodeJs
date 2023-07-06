import { instanceToPlain } from "class-transformer";
import { IUserRepository, IUserRepositoryRead} from "../../../../../repositories/User/IUserRepository";
import { IUserService } from "../../IUserService";
import { User } from "../../../../../entities/User";

export class ReadAllUserService implements IUserService{

  constructor(public userRepository : IUserRepository){}
  
  async execute(): Promise<IUserRepositoryRead | IUserRepositoryRead[]> {
    const users = await this.userRepository.readAll()
    return instanceToPlain(users.map(user=> new User(user))) as Array<IUserRepositoryRead>
  }
}