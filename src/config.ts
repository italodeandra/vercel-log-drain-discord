const config = {
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
  clientId: process.env.NEXT_PRIVATE_VERCEL_INTEGRATION_CLIENT_ID,
  clientSecret: process.env.NEXT_PRIVATE_VERCEL_INTEGRATION_SECRET,
  discordWebHook:
    "https://discord.com/api/webhooks/840325424331751526/RxgBThv7-sVt3pht4he71E_2p0pjhY9bsxqwhRvirMGtga1VBDGpH6Xq8QqENyXxJziJ",
  vercelApi: process.env.VERCEL_API || "https://api.vercel.com",
}

export default config
