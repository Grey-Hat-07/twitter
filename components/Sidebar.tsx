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
      <img src="/images/logo.png"alt="sidebar-bg" className='m-1 w-16 h-16 px-3 py-3 row-start-6 hover:scale-125'/>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Signin" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

    </div>
  )
}

export default Sidebar