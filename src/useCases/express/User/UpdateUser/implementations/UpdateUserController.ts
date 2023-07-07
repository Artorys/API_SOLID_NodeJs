import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IUserController } from "../../IUserController";
import { IUserService } from "../../IUserService";

export class UpdateUserController implements IUserController{
  handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    
  }
  constructor(public userService: IUserService){}
}