import { instanceToPlain } from "class-transformer";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";
import { IUserRepository, IUserRepositoryRead } from "../../../../../repositories/User/IUserRepository";
import { ICreateUserRequestDTO } from "../ICreateUserRequestDTO";
import { User } from "../../../../../entities/User";
import { IUserService } from "../../IUserService";

export class CreateUserService implements IUserService{
  constructor(
    public userRepository : IUserRepository){}
  async execute(data: ICreateUserRequestDTO) : Promise<IUserRepositoryRead> {
    const emailAlreadyInUse = await this.userRepository.findUserAlreadyUsedEmail(data.email)
    if(emailAlreadyInUse){
      throw new ErrorHTTP("Esse email já está em uso.", 400)
    }
    const userCreated = await this.userRepository.save(data)
    const user = new User(userCreated)
    return instanceToPlain(user) as IUserRepositoryRead
  }
}


