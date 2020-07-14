import { Measurement } from "../lib/interfaces/measurement.interface";
import * as measurementData from "./data.json"
import { DB } from "../lib/interfaces/db.interface"

export const getMeasurementData = (): Measurement[] => {
    const dbData: DB = measurementData
    return dbData.data 
}