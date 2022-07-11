import React from 'react'
import {
  BellIcon,
  BookmarkIcon,
  HomeIcon,
  CollectionIcon,
  HashtagIcon,
  MailIcon,
  UserIcon,
  DotsCircleHorizontalIcon
} from'@heroicons/react/outline'
import Image from 'next/image'
import SidebarRow from './SidebarRow'
function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center md:items-start'>
      <img src="/images/logo.png"alt="sidebar-bg" 
      className='m-1 w-16 h-16 px-3 py-3 row-start-6 cursor-pointer 
      transition-transform duration-700 ease-out active:rotate-180 hover:scale-125'/>
      <SidebarRow Icon={HomeIcon} title="Home" href="/" />
      <SidebarRow Icon={HashtagIcon} title="Explore" href="/" />
      <SidebarRow Icon={BellIcon} title="Notifications" href="/Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" href="/" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" href="/" />
      <SidebarRow Icon={CollectionIcon} title="Lists" href="/" />
      <SidebarRow Icon={UserIcon} title="Profile" href="/Profile" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" href="/" />

    </div>
  )
}

export default Sidebar