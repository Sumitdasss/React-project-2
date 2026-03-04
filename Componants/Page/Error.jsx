import React from 'react'
import Image from './Image'
import profile from '/src/assets/6.jpg'
import Container from './Container'

const Error = () => {
  return (
    <>
    <Container>
    <Image imgSrc={profile} className={`w-full h-full mt-[100px]`}/>
</Container>
    </>
  )
}

export default Error