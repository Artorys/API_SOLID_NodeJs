import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";
import { IUserRepositoryRead } from "../../../../../repositories/User/IUserRepository";
import { UserRepository } from "../../../../../repositories/User/implementations/UserRepository";
import { ICreateUserRequestDTO } from "../ICreateUserRequestDTO";

export class CreateUserService{
  constructor(
    private userRepository : UserRepository){}
  async execute(data: ICreateUserRequestDTO) : Promise<IUserRepositoryRead> {
    const emailAlreadyInUse = await this.userRepository.findUserAlreadyUsedEmail(data.email)
    if(emailAlreadyInUse){
      throw new ErrorHTTP("Esse email já está em uso.", 400)
    }
    const userCreated = this.userRepository.save(data)
    return userCreated
  }
}


