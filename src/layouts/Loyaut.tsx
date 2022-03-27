import Head from "next/head"
import Header from "../content/Header/Header"

export default function Layout ({
    children
  }: {
    children: React.ReactNode
  }): JSX.Element {
    return (
      <>
        <div className='container'>
      <Head>
        <title>Золотая точка</title>
        <meta name="description" content="Меняем волюты выгодно." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Header />
      </div>
     
      <main className='main'>
       {children}
      </main>

      <footer className='grid-footer'>
      © 2022 DmitryBryncev.
      </footer>
    </div>
      </>
    )
  }