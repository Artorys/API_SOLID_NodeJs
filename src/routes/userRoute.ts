import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/implements/schemaMiddleware";
import { ISchemaRequestMiddleware } from "../middlewares/ISchemaRequestMiddleware";
import { createUserSchema } from "../useCases/express/User/CreateUser/CreateUserSchema";
import { createUserController } from "../useCases/express/User/CreateUser";

const userRoute = Router()

userRoute.get("")
userRoute.get("/:id")
userRoute.post("",schemaValidationMiddleware(createUserSchema),(req: ISchemaRequestMiddleware,res)=>{
  return createUserController.handle(req,res)
})

export {userRoute}