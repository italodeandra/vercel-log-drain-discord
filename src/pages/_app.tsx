import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@material-ui/core/CssBaseline"
import createCache from "@emotion/cache"
import theme from "../theme"
import { VFC } from "react"

export const cache = createCache({ key: "css", prepend: true })

const MyApp: VFC<any> = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Vercel Log Drain Discord</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
