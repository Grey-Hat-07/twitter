import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
function Widgets() {
  return (
    <div className='col-span-3 mt-2 px-2 hidden lg:inline'>
      <div className='flex items-center space-x-2 bg-gray-200 p-3 rounded-full'>
        <SearchIcon className='h-6 w-10' />
        <input type="text" placeholder='Search twitter'
          className='flex-1 bg-transparent outline-none' />
      </div>

      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='elonmusk'
        // collection_id='twitter-timeline'
        options={{ height: 650 }}
      />
    {/* <iframe src="https://twitter.com/explore/tabs/trending" width="100%" height="650" style={{border: 'none', overflow: 'hidden'}}></iframe> */}

    </div>
  )
}

export default Widgets