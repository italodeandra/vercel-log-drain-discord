import axios, { AxiosError } from "axios"
import { cors, internalServerError } from "@italodeandra/pijama/server"
import { NextApiRequest, NextApiResponse } from "next"
import config from "../../config"
import FormData from "form-data"
import Log from "../../vercel/models/log"
import { use } from "next-api-middleware"

const withMiddleware = use(cors())

const integration = async (req: NextApiRequest, res: NextApiResponse) => {
  let logs = req.body || ([] as Log[])

  logs = logs.filter((l) => l.statusCode?.toString().startsWith("5"))
  for (let log of logs) {
    try {
      const json = JSON.stringify(log, null, 2)
      const content = log.message
      let formData = new FormData()
      formData.append("file", json, {
        contentType: "application/json",
        filename: "log.json",
        knownLength: json.length,
      })
      if (content && content.length < 2000) {
        formData.append("content", content)
      }
      await axios.post(config.discordWebHook, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...formData.getHeaders(),
        },
      })
    } catch (e) {
      const err: AxiosError = e
      if (err.isAxiosError && err.response.data) {
        console.error(err.response.data)
      } else {
        console.error(err.message)
      }
      return internalServerError(res)
    }
  }

  res.send("OK")
}

// noinspection JSUnusedGlobalSymbols
export default withMiddleware(integration)
