import Head from "next/head"
import { VFC } from "react"

const MyApp: VFC<any> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Vercel Log Drain Discord</title>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
        <link href={"/favicon.ico"} rel="icon" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
