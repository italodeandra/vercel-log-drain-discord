import { Box } from "@italodeandra/pijama"
import { useMount } from "react-use"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  useMount(() => {
    void router.push("https://vercel.com/integrations/log-drain-discord")
  })
  return (
    <Box sh={{ p: 8 }}>
      Redirecting to{" "}
      <a href="https://vercel.com/integrations/log-drain-discord">
        https://vercel.com/integrations/log-drain-discord
      </a>
    </Box>
  )
}

// noinspection JSUnusedGlobalSymbols
export default Home
