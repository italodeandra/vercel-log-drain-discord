import { cors, internalServerError, runMiddleware } from "next-library"
import { NextApiRequest, NextApiResponse } from "next"
import Log from "../../vercel/models/log"
import axios, { AxiosError } from "axios"

const integration = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors())

  const logs = req.body as Log[]

  if (logs && logs.length) {
    try {
      await axios.post("https://discord.com/api/webhooks/830165634360016917/B4AgSgzn0fFgfLXOzNFtUsJrQkTDp3xaeVsCA6vkrtDx3fwjQ_SfznSl35fsbKqXhaMN", {
        content: `\`\`\`json\n${JSON.stringify(logs)}\n\`\`\``.substr(0, 1999)
      })
    } catch (e) {
      const err: AxiosError = e
      if (err.isAxiosError && err.response.data) {
        console.error(err.response.data)
      }
      return internalServerError(res)
    }
  }

  res.send("OK")
}

// noinspection JSUnusedGlobalSymbols
export default integration
