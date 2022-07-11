import React from 'react'
import {useRouter} from 'next/router'
interface Props {
  Icon:(props: any) => JSX.Element
  title: string
  href: string
}

function SidebarRow({Icon,title,href}:Props) {
  const router = useRouter();
  return (
    <div className='flex max-w-fit items-center space-x-2 px-4 py-3 
    rounded-full hover:bg-gray-200 transition-all duration-200 group' onClick={async()=>{await router.push(href)}}>
      <Icon className="h-5 w-5"/>
      <p className='hidden md:inline-flex group-hover:text-sky-400 lg:text-lg lg:font-bold'>{title}</p>
    </div>
  )
}

export default SidebarRow