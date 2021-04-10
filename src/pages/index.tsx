import { useRouter } from "next/router"
import { useEffect } from "react"

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    void router.push("https://vercel.com/integrations/log-drain-discord")
  })
  return (
    <div style={{ padding: 8 }}>
      Redirecting to{" "}
      <a href="https://vercel.com/integrations/log-drain-discord">
        https://vercel.com/integrations/log-drain-discord
      </a>
    </div>
  )
}

// noinspection JSUnusedGlobalSymbols
export default Home
