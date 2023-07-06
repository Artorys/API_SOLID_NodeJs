import 'reflect-metadata';
import Express  from "express";
import { appRoutes } from "./routes";

const app = Express()

app.use(Express.json())

appRoutes(app)

export {app}
