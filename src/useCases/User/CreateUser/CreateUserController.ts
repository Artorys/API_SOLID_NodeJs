import { IControllerUseCase } from "../../IControllerUseCase";
import {Request,Response} from "express"
import { CreateUserService } from "./CreateUserService";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserController implements IControllerUseCase{
  constructor(private CreateUserService : CreateUserService){}

  async handle(req : Request, res : Response): Promise<Response<any, Record<string, any>>> {
    try{
      const {email,name,password,admin} = req.body as ICreateUserRequestDTO
      this.CreateUserService.execute({email,name,password,admin})
    }
    catch(err){
      return res.json({"message" : "Você"}).status(400)
    }
    
  }
}