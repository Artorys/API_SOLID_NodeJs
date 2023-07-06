import { Request, Response } from "express";
import { IUserController } from "../../IUserController";
import { IUserService } from "../../IUserService";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";

export class ReadSpecifyUserController implements IUserController{
  constructor(public userService : IUserService){}
  async handle(req: Request, res: Response): Promise<Response> {
    try{
      const id = req.params?.id
      if(!id){
        throw new ErrorHTTP("Passe um id de usuário válido,ex: 4.",404)
      }
      const user = await this.userService.execute(id)
      return res.status(200).json(user)
    }
    catch(err){
      if(err instanceof ErrorHTTP){
        return res.status(err.statusCode).json(err.message)
      }
    }
  }
}