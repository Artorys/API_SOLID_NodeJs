import {PrismaClient}  from "@prisma/client"
import { IDBProvider } from "../IDBProvider"

export class PrismaProvider implements IDBProvider{

    connect(): PrismaClient {
        const prisma = new PrismaClient()
        return prisma
    }
}