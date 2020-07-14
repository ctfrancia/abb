"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const measurement_controller_1 = require("../controllers/measurement.controller");
const router = new Router();
router.get("/feature/data", measurement_controller_1.featureController);
exports.default = router;
//# sourceMappingURL=routes.js.map