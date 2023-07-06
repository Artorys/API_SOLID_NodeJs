import { PrismaClient } from "@prisma/client";

export interface IPrismaProvider{
    connect() : PrismaClient
}