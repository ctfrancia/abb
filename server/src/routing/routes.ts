import * as Router from "koa-router"
import { featureController } from "../controllers/measurement.controller"
const router = new Router()

router.get("/feature/data", featureController)

export default router