import React from 'react'
import {
    CogIcon
} from '@heroicons/react/outline'
import NotifiContent from './NotifiContent'
function Notified() {
    return (
        <div className='col-span-8 lg:col-span-5 border-x-2 border-gray-100 overflow-scroll'>
            <div className='flex justify-between mt-3 p-2 mb-0'>
                <h3 className='font-semibold '>Notifications</h3>
                <CogIcon className='h-8 w-8 transition-all duration-200 ease-out p-2 rounded-full hover:bg-gray-200'/>
            </div>
            <div className='flex justify-center mt-1 transition-all duration-1000 ease-out border-b-2 border-gray-200'>
                <p className=' hover:bg-slate-200 p-24 pt-5 pb-5  text-sm '>All</p>
                <p className=' hover:bg-slate-200 p-24 pt-5 pb-5  text-sm '>Mentions</p>
            </div>
            <NotifiContent />
            <NotifiContent />
            <NotifiContent />

        </div>
    )
}

export default Notified