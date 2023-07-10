import { PrismaProvider } from "../../../../providers/db/prisma/implementations/PrismaProvider";
import { UserRepository } from "../../../../repositories/User/implementations/UserRepository";
import { UpdateUserController } from "./implementations/UpdateUserController";
import { UpdateUserService } from "./implementations/UpdateUserService";

const prismaClient = new PrismaProvider().connect()
const userRepository = new UserRepository(prismaClient)
const updateUserService = new UpdateUserService(userRepository)
const updateUserController = new UpdateUserController(updateUserService)

export {updateUserController}
