import React from 'react'

function NotifiContent() {
    return (
        <div>
            <div className='flex border-b-2 p-2 border-gray-200'>
                <img src='/images/logo.png' alt='logo' className=' w-12 h-12 ' />
                <p className='text-sm'>There was a login to your account @elonmusk from a new device on 09 Jul 2022. Review it now.</p>
            </div>
        </div>
    )
}

export default NotifiContent