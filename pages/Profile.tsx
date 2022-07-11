import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Profilecontent from '../components/Profilecontent'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto lg:max-w-5xl max overflow-hidden">
      <Head>
        <title>Profile | twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-10'>
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        <Profilecontent/>

        {/* Widgets */}
        <Widgets/>
      </main>
    </div>
  )
}

export default Home
