import { Response,Request } from "express";
import { IUserService } from "./IUserService";

export interface IUserController{
  handle(req : Request,res : Response) : Promise<Response>
  userService : IUserService
}