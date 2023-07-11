import { instanceToPlain } from "class-transformer";
import { User } from "../../../../../entities/User";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";
import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../../../../../repositories/User/IUserRepository";
import { IUserService } from "../../IUserService";
import { IUpdateUserRequestDTO } from "../IUpdateUserRequestDTO";

export class UpdateUserService implements IUserService{
  async execute(id: string, data: IUpdateUserRequestDTO): Promise<void | IUserRepositoryRead | IUserRepositoryRead[]> {
    const findUserById = await this.userRepository.checkEntityExistsById(id)
    if(!findUserById){
      throw new ErrorHTTP("Usuário não encontrado.",404)
    }
    const EmailAlreadyUsed = await this.userRepository.findUserAlreadyUsedEmail(data.email)
    if(EmailAlreadyUsed){
      throw new ErrorHTTP("Esse Email já está em uso",400)
    }
    const userUpdated = await this.userRepository.updateOne(id,data)
    if(!userUpdated){
      throw new ErrorHTTP("Usuário não encontrado.",404)
    }
    const user = new User(userUpdated)
    return instanceToPlain(user) as IUserRepositoryRead
  }
  constructor(public userRepository: IUserRepository){}
}