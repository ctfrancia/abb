"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeasurementData = void 0;
const measurementData = require("./data.json");
exports.getMeasurementData = () => {
    const dbData = measurementData;
    return dbData.data;
};
//# sourceMappingURL=measurement.models.js.map