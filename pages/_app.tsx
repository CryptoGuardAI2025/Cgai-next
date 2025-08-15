
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
export default function App({ Component, pageProps }: AppProps){
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      <title>CGAI</title>
    </Head>
    <Component {...pageProps} />
  </>)
}
