import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MainTemplate from '../components/templates/Main'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>BtnDelight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainTemplate />
      </main>
    </div>
  )
}

export default Home
