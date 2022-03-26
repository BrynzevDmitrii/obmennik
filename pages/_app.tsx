import { AppProps } from 'next/dist/shared/lib/router/router'
import { Mycontext } from '../content/CollapsibleTable/CollapsibleTable'
import '../styles/globals.css'

function MyApp({ Component, pageProps }:AppProps):JSX.Element {
  return (
  <Component {...pageProps} />
  )
}

export default MyApp
