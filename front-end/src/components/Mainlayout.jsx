import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


const Mainlayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Mainlayout
