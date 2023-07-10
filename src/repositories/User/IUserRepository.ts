import { IRepository } from "../IRepository";

export interface IUserRepository extends IRepository{
  findUserAlreadyUsedEmail(email : string) : Promise<boolean> 
}
export interface IUserRepositoryCreate{
  name: string;
  email: string;
  password: string;
  admin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface IUserRepositoryUpdate{
  id? : number;
  name?: string;
  email?: string;
  password?: string;
  admin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
export interface IUserRepositoryRead{
  id : number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}