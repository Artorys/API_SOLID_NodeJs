import {PrismaClient } from "@prisma/client";
import { IUserRepository, IUserRepositoryCreate, IUserRepositoryRead } from "../IUserRepository";
import { hash } from "bcryptjs";
import { User } from "../../../entities/User";

export class UserRepository implements IUserRepository{
  
  constructor(private prismaClient: PrismaClient){}

  async save(user: IUserRepositoryCreate): Promise<IUserRepositoryRead> {
    const repository = this.prismaClient
    const hashPassword = await hash(user.password,10)
    user.password = hashPassword
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

  async updateOne(id: string, data: User): Promise<User> {
    const idConverted = Number(id)
    if(!idConverted){
      return null
    }
    const repository = this.prismaClient
    const hashPassword = await hash(data.password,10)
    data.password = hashPassword
    const user = await repository.user.update({where : {id : idConverted},data})
    return user
  }

  async deleteOne(id: string): Promise<null | IUserRepositoryRead> {
    const idConverted = Number(id)
    if(!idConverted){
      return null
    }
    const repository = this.prismaClient
    const user = await repository.user.delete({where : {id : idConverted}})
    return user
  }
  async checkEntityExistsById(id: string): Promise<boolean>{
    const idConverted = Number(id)
    if(!idConverted){
      return false
    }
    const repository = this.prismaClient
    const userCheck = await repository.user.findUnique({where : {id : idConverted}})
    if(!userCheck){
      return false
    }
    return true
  }
  async findUserAlreadyUsedEmail(email: string): Promise<boolean> {
    const repository = this.prismaClient
    const userWithEmailAlreadyInUse = await repository.user.findFirst({where : {email}})
    if(!userWithEmailAlreadyInUse){
      return false
    }
    return true
  }
}