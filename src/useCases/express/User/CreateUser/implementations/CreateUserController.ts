import {Response} from "express"
import { CreateUserService } from "./CreateUserService";
import { ICreateUserRequestController } from "../ICreateUserRequestController";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";

export class CreateUserController{
  constructor(private CreateUserService : CreateUserService){}

  async handle(req : ICreateUserRequestController, res : Response): Promise<Response> {
    try{
      const {email,name,password,admin} = req.validatedData
      const userCreated = await this.CreateUserService.execute({email,name,password,admin})
      return res.status(201).json(userCreated)
    }
    catch(err){
      if(err instanceof ErrorHTTP){
        return res.status(err.statusCode).json(err.message)
      }
    }
    
  }
}