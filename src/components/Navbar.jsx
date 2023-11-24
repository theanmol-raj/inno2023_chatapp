import React from 'react'

function Navbar() {
  return (
    <div className=' border-b shadow-md'>
        <div className='max-w-7xl mx-auto flex justify-between items-center py-5 '>
            <h1 className=' font-bold text-xl'>ChatApp</h1>

            <div className=' flex space-x-4'>
                <p>About us</p>
                <p>Contact Us</p>
                <p>Login</p>
            </div>

        </div>
    </div>
  )
}

export default Navbar