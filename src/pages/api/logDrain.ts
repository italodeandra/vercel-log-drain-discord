import { connectDb, cors, internalServerError, runMiddleware } from "next-library"
import config from "../../config"
import { NextApiRequest, NextApiResponse } from "next"
import Log from "../../vercel/models/log"
import axios from "axios"

const integration = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors(), connectDb(config.databaseUrl))

  const logs = req.body as Log[]

  try {
    await axios.post("https://discord.com/api/webhooks/830165634360016917/B4AgSgzn0fFgfLXOzNFtUsJrQkTDp3xaeVsCA6vkrtDx3fwjQ_SfznSl35fsbKqXhaMN", {
      message: `\`\`\`json\n${JSON.stringify(logs)}\n\`\`\``
    })
  } catch (e) {
    console.error(e)
    return internalServerError(res)
  }

  res.send("OK")
}

// noinspection JSUnusedGlobalSymbols
export default integration
