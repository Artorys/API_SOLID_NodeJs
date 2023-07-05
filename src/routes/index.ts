import { Express } from "express";
import { userRoute } from "./userRoute";
export function appRoutes(app: Express){
    app.use("/user",userRoute)
}