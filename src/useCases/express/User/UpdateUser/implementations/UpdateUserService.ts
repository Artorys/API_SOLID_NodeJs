import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";
import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../../../../../repositories/User/IUserRepository";
import { IUserService } from "../../IUserService";
import { IUpdateUserRequestDTO } from "../IUpdateUserRequestDTO";

export class UpdateUserService implements IUserService{
  async execute(id: string, data: IUpdateUserRequestDTO): Promise<void | IUserRepositoryRead | IUserRepositoryRead[]> {
    const userCheck = await this.userRepository.checkEntityExistsById(id)
    if(!userCheck){
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
    return userUpdated as IUserRepositoryRead
  }
  constructor(public userRepository: IUserRepository){}
}