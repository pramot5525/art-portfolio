import type { AppProps } from 'next/app'
import '../assets/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
