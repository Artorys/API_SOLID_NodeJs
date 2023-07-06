import {PrismaClient } from "@prisma/client";
import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../IUserRepository";

export class UserRepository implements IUserRepository{
  
  constructor(private prismaClient: PrismaClient){}

  async save(user: IUserRepositoryCreate): Promise<IUserRepositoryRead> {
    const repository = this.prismaClient
    const userCreated = await repository.user.create({data : {...user}})
    return userCreated
  }
  async readAll(): Promise<Array<IUserRepositoryRead>> {
    const repository = this.prismaClient
    const users = await repository.user.findMany()
    return users
  }
  async readOne(id: string): Promise<IUserRepositoryRead> {
    const idConverted = Number(id)
    if(!idConverted){
      return null
    }
    const repository = this.prismaClient
    const user = await repository.user.findUnique({where : {id : idConverted}})
    return user
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