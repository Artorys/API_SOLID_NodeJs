import { Request } from "express";
import { ICreateUserRequestDTO } from "../useCases/express/User/CreateUser/ICreateUserRequestDTO";

export interface ISchemaRequestMiddleware extends Request{
 validatedData : ICreateUserRequestDTO
}