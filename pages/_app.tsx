import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.scss'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'



function MyApp({ Component, pageProps }:AppProps):JSX.Element {
  return (
    <Provider store={store}> 
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
