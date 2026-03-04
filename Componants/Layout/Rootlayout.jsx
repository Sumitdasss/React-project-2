import React from 'react'
import Headding from './Headding'
import { Outlet } from 'react-router-dom'
import Fotter from './Fotter'

const Rootlayout = () => {
  return (
    <>
    <Headding/>
    <Outlet/>
    <Fotter/>
   
    
    </>
    
  )
}

export default Rootlayout