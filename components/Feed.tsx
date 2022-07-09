import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import Tweetbox from './Tweetbox'
import { TwitterHashtagButton } from 'react-twitter-embed'

function Feed() {
    return (
        <div className='col-span-7 lg:col-span-5'>
            <div className='flex items-center justify-between'>
                <h2 className='p-5 pb-0 text-xl font-extrabold'>Home</h2>
                <RefreshIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer
             text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
            </div>
            {/* tweetbox */}

            <div>
                <Tweetbox />
            </div>
            {/* <TwitterHashtagButton
                tag={'cybersecurity'}
            /> */}


        </div>
    )
}

export default Feed