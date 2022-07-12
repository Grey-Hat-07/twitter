import React,{useState} from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon
} from '@heroicons/react/outline'
function Tweetbox() {
  const [input,setInput] = useState<string>("");

  return (
    <div className='flex pt-0 p-6 space-x-2'>
      <img src="images/profile.jpeg"
        className='mt-4 w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-full'
        alt='image' />

      <div className='flex flex-1 items-center pl-2 sm:pl-3'>
        <form className='flex flex-1 flex-col'>
          <input type="text" className='h-20 w-full text-lg placeholder:text-lg outline-none'
          placeholder="What's happening?" value={input} onChange={(e)=>{setInput(e.target.value)}} />

          <div className="flex items-center">
            <div className="flex flex-1 space-x-1 sm:space-x-2 text-twitter">
              <PhotographIcon className='h-6 w-6 cursor-pointer transition-transform duration-300 ease-out hover:scale-110' />
              <SearchCircleIcon className='h-6 w-6 cursor-pointer transition-transform duration-300 ease-out hover:scale-110' />
              <EmojiHappyIcon className='h-6 w-6 cursor-pointer transition-transform duration-300 ease-out hover:scale-110' />
              <CalendarIcon className='h-6 w-6 cursor-pointer transition-transform duration-300 ease-out hover:scale-110' />
              <LocationMarkerIcon className='h-6 w-6 cursor-pointer transition-transform duration-300 ease-out hover:scale-110' />
            </div>
            <button disabled={!input} className='text-white font-semibold px-3 py-2
             bg-twitter rounded-full cursor-pointer 
             transition-transform duration-500 ease-out hover:scale-110 disabled:opacity-50'>
              Tweet
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Tweetbox