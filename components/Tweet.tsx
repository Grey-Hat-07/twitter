import React from 'react'
import {
    ChatAlt2Icon,
    SwitchHorizontalIcon,
    HeartIcon,
    UploadIcon
} from '@heroicons/react/outline'

function Tweet() {
    return (
        <div className='flex flex-col space-x-3 border-y border-gray-200 p-5'>
            <div className='flex space-x-4'>
                <img src='/images/default-img.jpg' className=' w-12 h-12 rounded-full object-cover'
                    alt="image" />

                <div>
                    <div className="flex items-center space-x-1">
                        <p className='mr-1 font-bold'>
                            elon musk
                        </p>
                        <p className="text-gray-500 hidden text-sm sm:inline">@elonmusk .</p>
                        <p className=' text-gray-400'>10 minutes ago</p>
                    </div>
                    <p className=' pt-1'> Twitter is a social networking service that enables
                        users to post and read text, photos, videos, links, and interactive tweets.
                        It is designed to be used as a replacement for traditional news and notification
                        feeds on popular social networks. </p>

                    <img src='https://pbs.twimg.com/media/FXPWyYiagAAS1Uc?format=jpg&name=small'
                        alt='' className='m-5 ml-0 mb-1 max-h-64 rounded-lg object-cover shadow-sm' />
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <div className='flex cursor-pointer transition-transform duration-1000 ease-out rounded-full p-1 hover:bg-cyan-100 hover:text-twitter items-center space-x-2 text-gray-400'>
                <ChatAlt2Icon className=' h-6 w-6'/>
                </div >
                <div className='flex cursor-pointer transition-transform duration-1000 ease-out rounded-full p-1 hover:bg-green-100 hover:text-green-400 items-center space-x-2 text-gray-400'>
                <SwitchHorizontalIcon className=' h-6 w-6'/>
                </div>
                <div className='flex cursor-pointer transition-transform duration-1000 ease-out rounded-full p-1 hover:bg-red-50 hover:text-red-500 items-center space-x-2 text-gray-400'>
                <HeartIcon className=' h-6 w-6'/>
                </div>
                <div className='flex cursor-pointer transition-transform duration-1000 ease-out rounded-full p-1 hover:bg-cyan-100 hover:text-twitter items-center space-x-2 text-gray-400'>
                <UploadIcon className=' h-6 w-6'/>
                </div>
            </div>
        </div>
    )
}

export default Tweet