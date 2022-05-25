import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Usefulhandles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-cols-1 lg:grid"></div>
    </div>
  )
}

export default Home
