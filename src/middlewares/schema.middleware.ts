import { NextFunction,Request,Response } from "express";
import {Schema, ValidationError} from "yup"

export class schemaValidationMiddleware{
    validate<T>(schema: Schema<T>) {
      return async (req: Request,res: Response,next: NextFunction)=>{
        try {
        const data = req.body;
        await schema.validate(data, { abortEarly: false, stripUnknown: true });
        next();        
      } catch (err) {
        if (err instanceof ValidationError) {
          const { errors } = err;
          return res.status(400).json({ message: errors });
        }
      }
    }
  };
}