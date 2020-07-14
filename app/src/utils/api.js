import Axios from "axios"

import axios from "axios"
const url = "localhost:8080/feature/data"
export const getFeatureData = async () => {
    const response = {
        data: null,
        err: null,
    }
    try{
        const info = await axios.get(url)
        console.log("INFO", info)
        const response = {
            data: null,
            error: null,
        } 
        return data, null
    } catch (e) {
        return null, e
    }
}