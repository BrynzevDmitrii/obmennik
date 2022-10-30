import Head from "next/head"
import { useEffect, useState } from "react";
import Header from "../content/Header/Header"
import {useMediaQuery} from '@react-hook/media-query'

export default function Layout ({
    children
  }: {
    children: React.ReactNode
  }): JSX.Element {

    const matches = useMediaQuery('(min-width: 768px)')
    const[widht, setWidht] = useState(matches);

    useEffect(() => {
        window.addEventListener('resize', ()=> {
          return setWidht(matches)  
        })
  }, [matches]);
    return (
      <>
        <div className='container'>
      <Head>
        <title>Золотая точка</title>
        <meta name="description" content="Меняем волюты выгодно." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Header widhtWindows = {widht} />
      </div>
     
      <main className='main'>
       {children }
      </main>

      <footer className='grid-footer'>
      © 2022 DmitryBryncev.
      </footer>
    </div>
      </>
    )
  }