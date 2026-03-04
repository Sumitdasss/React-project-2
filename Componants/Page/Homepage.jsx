import React from 'react'
import Bannerone from '../Banner/Bannerone'
import Service from '../Layout/Service'
import About from '../Layout/About'
import Work from '../Layout/Work'
import Workprosses from '../Layout/Workprosses'
import Review from '../Layout/Review'
import Blog from '../Layout/Blog'

const Homepage = () => {
  return (
    <>
    <Bannerone/>
    <Service/>
    <About/>
    <Work/>
    <Workprosses/>
    <Review/>
    <Blog/>

    </>
  )
}

export default Homepage