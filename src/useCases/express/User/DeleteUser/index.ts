import { PrismaProvider } from "../../../../providers/db/prisma/implementations/PrismaProvider";
import { UserRepository } from "../../../../repositories/User/implementations/UserRepository";
import { DeleteUserController } from "./implementations/DeleteUserController";
import { DeleteUserService } from "./implementations/DeleteUserService";

const prismaClient = new PrismaProvider().connect()
const userRepository = new UserRepository(prismaClient)
const deleteUserService = new DeleteUserService(userRepository)
const deleteUserController = new DeleteUserController(deleteUserService)

export {deleteUserController}