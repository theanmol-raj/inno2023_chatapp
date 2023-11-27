import React from 'react'


const AVTRURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVVuJ2VZiipnEGNBKO8TGT6-yBTiQR-vJsw&usqp=CAU'


function UserCard(props) {




  return (
    <div className=' '>
        <div className=' p-1 max-w-max mx-auto bg-gradient-to-br from-purple-500 to-yellow-500 rounded-full '>
            <img className='rounded-full  h-12 w-12 object-cover object-top'  src={props.img ? props.img : AVTRURL } />
        </div>
        <div>
            <p className='  text-sm text-center'>{props.name}</p>
        </div>

    </div>
  )
}

export default UserCard

