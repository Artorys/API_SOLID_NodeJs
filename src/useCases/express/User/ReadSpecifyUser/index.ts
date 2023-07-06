import { PrismaProvider } from "../../../../providers/db/prisma/implementations/PrismaProvider";
import { UserRepository } from "../../../../repositories/User/implementations/UserRepository";
import { ReadSpecifyUserController } from "./implementations/ReadSpecifyUserController";
import { ReadSpecifyUserService } from "./implementations/ReadSpecifyUserService";

const prismaClient = new PrismaProvider().connect()
const userRepository = new UserRepository(prismaClient)
const readSpecifyUserService = new ReadSpecifyUserService(userRepository)
const readSpecifyUserController = new ReadSpecifyUserController(readSpecifyUserService)

export {readSpecifyUserController}