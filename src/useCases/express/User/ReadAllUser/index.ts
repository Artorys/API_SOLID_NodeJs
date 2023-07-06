import { PrismaProvider } from "../../../../providers/db/prisma/implementations/PrismaProvider";
import { UserRepository } from "../../../../repositories/User/implementations/UserRepository";
import { ReadAllUserController } from "./implementations/ReadAllUserController";
import { ReadAllUserService } from "./implementations/ReadAllUserService";

const prismaClient = new PrismaProvider().connect()
const userRepository = new UserRepository(prismaClient)
const readAllUserService = new ReadAllUserService(userRepository)
const readAllUserController = new ReadAllUserController(readAllUserService)

export {readAllUserController}