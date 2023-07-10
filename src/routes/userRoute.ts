import { Request, Response, Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/implements/schemaMiddleware";
import { ISchemaRequestMiddleware } from "../middlewares/ISchemaRequestMiddleware";
import { createUserSchema } from "../useCases/express/User/CreateUser/CreateUserSchema";
import { createUserController } from "../useCases/express/User/CreateUser";
import { readAllUserController } from "../useCases/express/User/ReadAllUser";
import { readSpecifyUserController } from "../useCases/express/User/ReadSpecifyUser";
import { deleteUserController } from "../useCases/express/User/DeleteUser";
import { updateUserSchema } from "../useCases/express/User/UpdateUser/UpdateUserSchema";
import { updateUserController } from "../useCases/express/User/UpdateUser";

const userRoute = Router()
userRoute.post("",schemaValidationMiddleware(createUserSchema),(req: ISchemaRequestMiddleware,res)=>{
  return createUserController.handle(req,res)
})

userRoute.get("",(req : Request,res : Response)=>{
  return readAllUserController.handle(req,res)
})

userRoute.get("/:id",(req : Request, res : Response)=>{
  return readSpecifyUserController.handle(req,res)
})

userRoute.patch("/:id",schemaValidationMiddleware(updateUserSchema),(req : ISchemaRequestMiddleware, res : Response)=>{
  return updateUserController.handle(req,res)
})

userRoute.delete("/:id",(req : Request,res : Response)=>{
  return deleteUserController.handle(req,res)
})


export {userRoute}