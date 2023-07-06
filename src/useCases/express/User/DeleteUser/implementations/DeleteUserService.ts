import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";
import { IUserRepository, IUserRepositoryRead } from "../../../../../repositories/User/IUserRepository";
import { IUserService } from "../../IUserService";

export class DeleteUserService implements IUserService{
  async execute(id?: string): Promise<IUserRepositoryRead | IUserRepositoryRead[] | void> {
    const userDeleted = await this.userRepository.deleteOne(id)
    if(!userDeleted){
      throw new ErrorHTTP("Usuário não encontrado.",404)
    }
  }
  constructor(public userRepository: IUserRepository){}
}