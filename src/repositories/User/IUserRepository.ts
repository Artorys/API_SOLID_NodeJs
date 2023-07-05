export interface IUserRepository{
  save(data : IUserRepositoryCreate): Promise<IUserRepositoryRead>
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
export interface IUserRepositoryRead extends IUserRepositoryCreate{
  id : number;
}