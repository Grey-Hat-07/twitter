import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import Notified from '../components/Notified'
function Notifications() {
  return (
    <div className="mx-auto lg:max-w-5xl max overflow-hidden">
      <Head>
        <title>Notifications | twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-10'>
        {/* sidebar */}
        <Sidebar />

        {/* Notifications*/}
        <Notified/>
        

        {/* Widgets */}
        <Widgets/>
      </main>
    </div>
  )
}

export default Notifications