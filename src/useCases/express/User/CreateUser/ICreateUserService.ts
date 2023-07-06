import { UserRepository } from "../../../../repositories/User/implementations/UserRepository";

export interface ICreateUserService{
  userRepository : UserRepository
}