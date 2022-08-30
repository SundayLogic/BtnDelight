import type { NextPage } from 'next'
import Head from 'next/head'
import MainTwo from '../components/templates/MainTwo'

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>BtnDelight</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href='/site.manifest'/>
      </Head>
      <main>
        <MainTwo />
      </main>
    </div>
  )
}

export default Home
