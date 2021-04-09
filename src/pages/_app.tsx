import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import { CacheProvider } from "@emotion/react"
import CssBaseline from "@material-ui/core/CssBaseline"
import createCache from "@emotion/cache"
import theme from "../theme"
import { useEffect, VFC } from "react"
import { NProgress, Snackbar } from "react-library"
import { QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"
import useQueryClientRef from "../queryClient"

export const cache = createCache({ key: "css", prepend: true })

const MyApp: VFC<any> = ({ Component, pageProps }) => {
  const queryClientRef = useQueryClientRef()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Vercel Log Drain Discord</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <Snackbar />
            <NProgress />
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
