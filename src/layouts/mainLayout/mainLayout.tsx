import React from 'react'
import './mainLayout.scss'
import { Outlet } from 'react-router-dom'

const MainLayout:React.FC = () => {
  return (
    <>
    
      <Outlet/>
    </>
  )
}

export default MainLayout