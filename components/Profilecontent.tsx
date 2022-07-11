import React from 'react'
import {
    ArrowLeftIcon,
    CalendarIcon
} from '@heroicons/react/outline'
import Tweets from './Tweets'
import TweetsnReplies from './TweetsnReplies'
import Media from './Media'
import Likes from './Likes'
import {useRouter} from 'next/router'
function Profilecontent() {
    const router = useRouter();
    return (
        <div className='col-span-8 lg:col-span-5 border-x-2 border-gray-100 overflow-scroll'>
            <div className='flex items-center mb-0'>
                <ArrowLeftIcon className='w-7 h-8 p-1 mt-4 rounded-full hover:bg-gray-200' onClick={async() => await router.back()} />
                <h2 className='p-4 pb-0 text-md font-extrabold'>Elon Musk</h2>
            </div>
            <p className='p-11 mt-0 pb-1 pt-0 text-gray-400 flex items-center text-sm'>1.1k tweets</p>
            <div className='flex mr-3 pr-3'>
                <div className="relative">
                    <img src='images/background.jpg' className='h-40 w-screen rounded-sm opacity-70' />
                    <br /><br />
                    <div className="absolute bottom-0 left-8 ...">
                        <img src='images/profile.jpeg' className=' border-slate-50 border-4 flex h-24 w-24 rounded-full' />
                    </div>
                    <div className="absolute bottom-0 right-10 text-sm rounded-full bg-slate-100 p-2 border-2  transition-all duration-150 ease-out hover:bg-slate-300">
                        <p className=' text-sm'>Edit profile</p>
                    </div>
                </div>
            </div>
            <div className='ml-3'>
                <div>
                    <p className=' font-bold mb-0 pb-0'>Elon Musk</p>
                    <p className=' pt-0 mt-0 text-gray-500 text-sm'>@elonmusk</p>
                </div>
                <div className='flex mt-5'>
                    <CalendarIcon className='  w-4 h-4' />
                    <p className=' pl-1 text-sm text-gray-600'>Joined june 2010</p>
                </div>
                <div className='text-sm flex mt-3'>
                    <p className='pr-4 test-sm text-slate-800'>100 Following</p>
                    <p className='text-sm text-slate-800'>10M Followers </p>
                </div>
            </div>

            <div className='flex justify-center mt-4 transition-all duration-1000 ease-out '>
                <p className=' hover:bg-slate-200 p-7 text-md font-semibold'>Tweets</p>
                <p className=' hover:bg-slate-200 pt-7 p-6 text-md font-semibold'>Tweets & Replies</p>
                <p className=' hover:bg-slate-200 p-7 text-md font-semibold'>Media</p>
                <p className=' hover:bg-slate-200 p-7 text-md font-semibold'>Likes</p>
            </div>
            
        </div>
    )
}

export default Profilecontent