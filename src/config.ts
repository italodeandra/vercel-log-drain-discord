const config = {
  vercelApi: process.env.VERCEL_API || "https://api.vercel.com",
  clientId: process.env.VERCEL_INTEGRATION_CLIENT_ID,
  clientSecret: process.env.VERCEL_INTEGRATION_SECRET,
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
}

export default config
