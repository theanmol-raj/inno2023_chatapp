import React from 'react'
import { Cog6ToothIcon ,UserGroupIcon ,UserIcon ,Squares2X2Icon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

function AppNavbar() {
  return (
    <div className=' fixed left-1/2 -translate-x-1/2 bottom-5  bg-black flex space-x-6 max-w-max p-4 px-6 rounded-full '>
         <Squares2X2Icon className=" hover:bg-lime-200 cursor-pointer p-2 hover:text-black  h-10 rounded-full text-gray-100" />
         <UserGroupIcon className=" hover:bg-lime-200 cursor-pointer p-2 hover:text-black  h-10 rounded-full text-gray-100" />
         <PaperAirplaneIcon className=" -rotate-45 hover:bg-lime-200 cursor-pointer p-2 hover:text-black  h-10 rounded-full text-gray-100" />
         <UserIcon className=" hover:bg-lime-200 cursor-pointer p-2 hover:text-black  h-10 rounded-full text-gray-100" />
         <Cog6ToothIcon className=" hover:bg-lime-200 cursor-pointer p-2 hover:text-black  h-10 rounded-full text-gray-100" />
    </div>
  )
}

export default AppNavbar