export interface IUserRepository{
  save(data : IUserRepositoryCreate): Promise<IUserRepositoryRead>
  findUserAlreadyUsedEmail(email : string) : Promise<boolean>
  readAll(): Promise<Array<IUserRepositoryRead>>
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