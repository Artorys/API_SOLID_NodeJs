import { Response } from "express";
import { IUserController } from "../../IUserController";
import { IUserService } from "../../IUserService";
import { IUpdateUserRequestController } from "../IUpdateUserRequestController";
import { ErrorHTTP } from "../../../../../errors/implementations/ErrorHTTP";

export class UpdateUserController implements IUserController{
  async handle(req: IUpdateUserRequestController, res: Response): Promise<Response> {
   try{
    const id = req.params?.id
    const data = req.validatedData
    const userUpdated = await this.userService.execute(id,data)
    return res.status(200).json(userUpdated)
   }
   catch(err){
    if(err instanceof ErrorHTTP){
      return res.status(err.statusCode).json(err.message)
    }
   }
  }
  constructor(public userService: IUserService){}
}