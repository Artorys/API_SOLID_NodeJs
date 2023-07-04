import { IControllerUseCase } from "../../IControllerUseCase";
import {Request,Response} from "express"
import { CreateUserService } from "./createUserService";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserController implements IControllerUseCase{
  private CreateUserService : CreateUserService

  async handle(req : Request, res : Response): Promise<void> {
    const {email,name,password,admin} = req.body as ICreateUserRequestDTO
    
  }
}