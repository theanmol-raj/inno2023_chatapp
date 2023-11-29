import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


function SidePannel() {
  return (
    <div className=' w-full bg-black p-12 h-screen '>
        <div className=' bg-black mb-8 border-t border-x border-gray-200 flex w-full p-3 px-6 rounded-md shadow-2xl group  active: shadow-lime-500 '>
            <input className=' bg-transparent w-full text-white ring-0 ' />
            <MagnifyingGlassIcon className='text-gray-400 h-6' />

        </div>
            
            

        </div>
  )
}

export default SidePannel