import { badRequest, cors, internalServerError, runMiddleware } from "next-library"
import config from "../../config"
import { NextApiRequest, NextApiResponse } from "next"
import vercelAxios from "../../vercel/vercelAxios"
import { AxiosError } from "axios"

const integration = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors())

  const { code, configurationId, next } = req.query as {
    code: string
    configurationId: string
    next: string
  }

  if (!code || !configurationId || !next) {
    return badRequest(res)
  }

  try {
    const params = new URLSearchParams()
    params.append("client_id", config.clientId)
    params.append("client_secret", config.clientSecret)
    params.append("code", code)
    params.append("redirect_uri", `${config.baseUrl}/api/integration`)
    const accessToken = await vercelAxios
      .post("/v2/oauth/access_token", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => res.data.access_token)
    await vercelAxios.post("/v1/integrations/log-drains", {
      "name": "Discord Log Drain",
      "type": "json",
      "url": `${config.baseUrl}/api/logDrain`
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  } catch (e) {
    const err: AxiosError = e
    console.error(err.isAxiosError ? err.response.data : err)
    return internalServerError(res)
  }

  res.redirect(next)

  console.log("test")
}

// noinspection JSUnusedGlobalSymbols
export default integration
