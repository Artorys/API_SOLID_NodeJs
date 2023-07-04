import { app } from "./app";
import { PrismaProvider } from "./providers/db/implementations/prismaProvider";
import { appRoutes } from "./routes";

app.listen(3000,()=>{
    console.log("SERVER ON!")
})
const Prisma = new PrismaProvider()
appRoutes(app)

export {app,Prisma}