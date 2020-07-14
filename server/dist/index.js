"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");
const routes_1 = require("./routing/routes");
const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const app = new Koa();
app
    .use(logger())
    .use(bodyParser())
    .use(cors())
    .use(routes_1.default.routes())
    .use(routes_1.default.allowedMethods());
app.listen(PORT, () => console.log(`Started on port: ${PORT} in ${ENV} - mode`));
//# sourceMappingURL=index.js.map