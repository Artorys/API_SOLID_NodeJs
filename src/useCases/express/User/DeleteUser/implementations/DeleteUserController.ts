import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IUserController } from "../../IUserController";
import { IUserService } from "../../IUserService";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";

export class DeleteUserController implements IUserController{
  async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    try{
      const id = req.params?.id
      await this.userService.execute(id)
      return res.status(204).send()
    }
    catch(err){
      if(err instanceof ErrorHTTP){
        return res.status(err.statusCode).json(err.message)
      }
    }
  }
  constructor( public userService: IUserService){}
}