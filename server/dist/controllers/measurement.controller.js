"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureController = void 0;
const measurement_models_1 = require("../models/measurement.models");
exports.featureController = async (ctx) => {
    // while there is nothing async going on right now this would normally be an async func
    try {
        const measureData = measurement_models_1.getMeasurementData();
        console.log(measureData);
        ctx.status = 200;
        ctx.response.body = measureData;
    }
    catch (e) {
        console.log(e);
    }
};
//# sourceMappingURL=measurement.controller.js.map