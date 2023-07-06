import {PrismaClient}  from "@prisma/client"
import { IPrismaProvider } from "../IPrismaProvider"

export class PrismaProvider implements IPrismaProvider{

    connect(): PrismaClient {
        const prisma = new PrismaClient()
        return prisma
    }
}