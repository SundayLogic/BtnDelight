import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainTemplate from '../components/templates/Main'
import MainTwo from '../components/templates/MainTwo'

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>BtnDelight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainTwo />
      </main>
    </div>
  )
}

export default Home
