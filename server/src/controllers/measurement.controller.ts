import { getMeasurementData } from "../models/measurement.models"
import { Context } from "koa"
import { Measurement } from "../lib/interfaces/measurement.interface"

export const featureController = async (ctx: Context): Promise<void> => {
    // while there is nothing async going on right now this would normally be an async func
    try {
        const measureData: Measurement[] = getMeasurementData()
        console.log(measureData)
        ctx.status = 200
        ctx.response.body = measureData
    } catch(e) {
        console.log(e)
    }
}