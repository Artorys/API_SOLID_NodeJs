import {Response} from "express"
import { ICreateUserRequestController } from "../ICreateUserRequestController";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";
import { IUserController } from "../../IUserController";
import { IUserService } from "../../IUserService";

export class CreateUserController implements IUserController{
  constructor(public userService : IUserService){}

  async handle(req : ICreateUserRequestController, res : Response): Promise<Response> {
    try{
      const {email,name,password,admin} = req.validatedData
      const userCreated = await this.userService.execute({email,name,password,admin})
      return res.status(201).json(userCreated)
    }
    catch(err){
      if(err instanceof ErrorHTTP){
        return res.status(err.statusCode).json(err.message)
      }
    }
  }
}