import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto lg:max-w-5xl max overflow-hidden">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-10'>
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        <Feed/>

        {/* Widgets */}
        <Widgets/>
      </main>
    </div>
  )
}

export default Home
