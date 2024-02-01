import React from 'react'
import './authLayout.scss'
import { Outlet } from 'react-router-dom'

const AuthLayout:React.FC = () => {
  return (
    <>
    
    <Outlet/>
    </>
  )
}

export default AuthLayout