import { PrismaProvider } from "../../../../providers/db/prisma/implementations/PrismaProvider"
import { UserRepository } from "../../../../repositories/User/implementations/UserRepository"
import { CreateUserController } from "./implementations/CreateUserController"
import { CreateUserService } from "./implementations/CreateUserService"

const PrismaClient = new PrismaProvider().connect()
const userRepository = new UserRepository(PrismaClient)
const createUserService = new CreateUserService(userRepository)
const createUserController = new CreateUserController(createUserService)

export {createUserController}