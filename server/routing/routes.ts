import * as Router from "koa-router"
import { featureController } from "../controllers/feature.controller"
const router = new Router()

router.get("/feature/data", featureController)