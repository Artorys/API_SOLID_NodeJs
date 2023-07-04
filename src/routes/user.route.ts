import { Router } from "express";

const userRoute = Router()

userRoute.get("/")
userRoute.get("/:id")

export {userRoute}