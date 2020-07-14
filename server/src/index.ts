import * as Koa from "koa"
import * as logger from "koa-logger"
import * as bodyParser from "koa-bodyparser"
import * as cors from "@koa/cors"

import router from "./routing/routes"
import * as dotenv from "dotenv"

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const app = new Koa()

app
    .use(logger())
    .use(bodyParser())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(PORT, () => console.log(`Started on port: ${PORT} in ${ENV} - mode`))