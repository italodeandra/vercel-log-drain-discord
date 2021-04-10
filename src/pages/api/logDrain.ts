import { cors, internalServerError, runMiddleware } from "next-library"
import { NextApiRequest, NextApiResponse } from "next"
import Log from "../../vercel/models/log"
import axios, { AxiosError } from "axios"
import FormData from "form-data"

const wrapCode = (str = "") => str/*`\`\`\`\n${str}\n\`\`\``*/

const integration = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors())

  let logs = req.body || ([] as Log[])

  logs = logs.filter((l) => l.statusCode?.toString().startsWith("5"))
  for (let log of logs) {
    try {
      const json = JSON.stringify(log, null, 2)
      const content = log.message
      let formData = new FormData()
      formData.append("file", json, {
        contentType: "application/json",
        knownLength: json.length,
        filename: "log.json",
      })
      if (content && content.length < 2000 - wrapCode().length) {
        formData.append("content", wrapCode(content))
      }
      await axios.post(
        "https://discord.com/api/webhooks/830165634360016917/B4AgSgzn0fFgfLXOzNFtUsJrQkTDp3xaeVsCA6vkrtDx3fwjQ_SfznSl35fsbKqXhaMN",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            ...formData.getHeaders(),
          },
        }
      )
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
export default integration
