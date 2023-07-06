import { Request, Response } from "express";
import { IUserController } from "../../IUserController";
import { IUserService } from "../../IUserService";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";

export class ReadAllUserController implements IUserController{
  constructor(public userService : IUserService){}

  async handle(req:Request,res : Response ): Promise<Response<any, Record<string, any>>> {
    try{
      const users = await this.userService.execute()
      return res.status(200).json(users)
    }
    catch(err){
      if(err instanceof ErrorHTTP){
        return res.status(err.statusCode).json(err.message)
      }
    }
  }
}