import {PrismaClient } from "@prisma/client";
import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../IUserRepository";

export class UserRepository implements IUserRepository{
  
  constructor(private prismaClient: PrismaClient){}

  async save(user: IUserRepositoryCreate): Promise<IUserRepositoryRead> {
    const repository = this.prismaClient
    const userCreated = await repository.user.create({data : {...user}})
    return userCreated
  }
  async findUserAlreadyUsedEmail(email: string): Promise<boolean> {
    const repository = this.prismaClient
    const userWithEmailAlreadyInUse = await repository.user.findFirst({where : {email}})
    if(userWithEmailAlreadyInUse){
      return true
    }
    return false
  }
}