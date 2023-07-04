import Express  from "express";
import { appRoutes } from "./routes";
import { User } from "./entities/User";

const app = Express()

app.use(Express.json())

appRoutes(app)

export {app}
