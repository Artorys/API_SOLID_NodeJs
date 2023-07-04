import { Express } from "express";
import { userRoute } from "./user.route";
export function appRoutes(app: Express){
    app.use("/user",userRoute)
}