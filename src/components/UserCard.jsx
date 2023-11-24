import React from 'react'

function UserCard() {
  return (
    <div className='flex space-x-4 p-6 my-1 py-4 bg-red-300/10 rounded-md '>
        <div className=' p-1 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-full '>
            <img className='rounded-full  h-14 w-14 object-cover object-top'  src='http://t2.gstatic.com/images?q=tbn:ANd9GcTKKakWSNAt-PcRjTgYOQIcvm6m_uhzy8rSb2oyxmqWjPhTsc7VoBpCL4dTVNQlGrN7HIFUtA' />
        </div>
        <div>
            <h1 className=' text-white font-bold text-xl '>Anmol</h1>
            <p className=' text-lime-500'>@anmolraj_</p>
        </div>

    </div>
  )
}

export default UserCard