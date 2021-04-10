import Head from "next/head"
import { VFC } from "react"

const MyApp: VFC<any> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Vercel Log Drain Discord</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
