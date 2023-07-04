export class User {
   
  public readonly id: Number;
  public name: string;
  public email: string;
  public password: string;
  public admin: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this,props)
  }
}