import React from 'react'
import AppNavbar from '../components/AppNavbar'
import SidePannel from '../components/SidePannel'

function AppScreen() {
  return (
    <div className=' grid grid-cols-4 h-screen  '>
        <SidePannel />
        <div className=''></div>
        <AppNavbar />
    </div>
  )
}

export default AppScreen