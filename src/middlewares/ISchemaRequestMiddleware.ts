import { Request } from "express";
import { ICreateUserRequestDTO } from "../useCases/express/User/CreateUser/ICreateUserRequestDTO";
import { IUpdateUserRequestDTO } from "../useCases/express/User/UpdateUser/IUpdateUserRequestDTO";

export interface ISchemaRequestMiddleware extends Request{
 validatedData : ICreateUserRequestDTO | IUpdateUserRequestDTO
}