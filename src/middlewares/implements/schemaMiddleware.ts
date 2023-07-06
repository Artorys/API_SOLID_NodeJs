import { NextFunction,Response } from "express";
import {Schema, ValidationError} from "yup"
import { ISchemaRequestMiddleware } from "../ISchemaRequestMiddleware";
import { ICreateUserRequestDTO } from "../../useCases/express/User/CreateUser/ICreateUserRequestDTO";

export function schemaValidationMiddleware(schema: Schema) {
  return async function (req: ISchemaRequestMiddleware, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const validatedData : ICreateUserRequestDTO = await schema.validate(data, { abortEarly: false, stripUnknown: true });
      req.validatedData = validatedData
      next();
    } catch (err) {
      if (err instanceof ValidationError) {
        const { errors } = err;
        return res.status(400).json({ message: errors });
      }
    }
  };
}