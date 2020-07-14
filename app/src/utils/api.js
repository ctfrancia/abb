import axios from "axios"
const url = "http://localhost:8080/feature/data"

export const getFeatureData = async () => {
    const response = {
        data: null,
        err: null,
    }
    try{
        const info = await axios.get(url)
        response.data = info.data
        response.err = null
        return response
    } catch (e) {
        response.data = null
        response.err = e
        return response
    }
}