import React from 'react'
import Status from './Status'

function StatusContainer() {
  return (
    <div className='  flex-grow max-w-3xl w-full px-4 lg:px-12  '>
      
      <Status />
      <Status />
      <Status />
      <Status />
      <Status />
    </div>
  )
}

export default StatusContainer