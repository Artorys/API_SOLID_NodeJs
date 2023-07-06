import { app } from "./app";
import { appRoutes } from "./routes";

app.listen(3000,()=>{
    console.log("SERVER ON!")
})

appRoutes(app)

export {app}