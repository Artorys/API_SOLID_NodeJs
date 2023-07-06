import { instanceToPlain } from "class-transformer";
import { User } from "../../../../../entities/User";
import { IUserRepository, IUserRepositoryRead } from "../../../../../repositories/User/IUserRepository";
import { IUserService } from "../../IUserService";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";

export class ReadSpecifyUserService implements IUserService{
  async execute(id?: string): Promise<IUserRepositoryRead | IUserRepositoryRead[]> {
    const userFindByID = await this.userRepository.readOne(id)
    if(!userFindByID){
      throw new ErrorHTTP("Usuário não encontrado",404)
    }
    const user = new User(userFindByID)
    return instanceToPlain(user) as IUserRepositoryRead
  }
  constructor(public userRepository: IUserRepository){}
}