import axios from "axios"
import config from "../config"

const vercelAxios = axios.create({
  baseURL: config.vercelApi
})

export default vercelAxios