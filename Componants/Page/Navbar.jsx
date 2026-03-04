
import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import profile from '/src/assets/Logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'
import { FaAngleUp } from "react-icons/fa";

const Navbar = () => {
  return (
   <>
   
   <Container >
<Flex className={"fixed top-0 left-0 right-0 z-50 max-w-[1440px] mx-auto  justify-between items-center  h-[100px] "}>
    <div className="">
<picture>
<Image imgSrc={profile}/>

</picture>


    </div>
    <div className="">
        <ul className=' flex text-[20px] font-semibold gap-x-15  text-[#192239]'>
            <li className='font-opensans'><Link to="/" className='flex items-center group hover:text-[#FF7628]'>Home <FaAngleUp className='ml-[13px] group-hover:rotate-180 duration-500 '/></Link></li>
            <li className='font-opensans'><Link to="/about" className='flex items-center group hover:text-[#FF7628]'>About<FaAngleUp className='ml-[13px] group-hover:rotate-180 duration-500 '/></Link></li>
            <li className='font-opensans'><Link to="/service" className='flex items-center group hover:text-[#FF7628]'>Service<FaAngleUp className='ml-[13px] group-hover:rotate-180 duration-500 '/></Link></li>
            <li className='font-opensans'><Link to="/portfolio" className='flex items-center group hover:text-[#FF7628]'>Portfolio<FaAngleUp className='ml-[13px] group-hover:rotate-180 duration-500 '/></Link></li>
            <li className='font-opensans'><Link to="/price" className='flex items-center group hover:text-[#FF7628]'>Price<FaAngleUp className='ml-[13px] group-hover:rotate-180 duration-500 '/></Link></li>
            <li className='font-opensans'><Link to="/blog" className='flex items-center group hover:text-[#FF7628]'>Blog<FaAngleUp className='ml-[13px] group-hover:rotate-180 duration-500 '/></Link></li>
            </ul>

    </div>
    <div className="">
        <Button text={"Contact Us"} className={"bg-[#FF7628] text-[20px] font-opensans font-semibold hover:bg-[#FF7628]/90 text-white px-6 py-4 rounded-[50px]"}/>
    </div>





</Flex>
</Container>
   
   </>
  )
}

export default Navbar