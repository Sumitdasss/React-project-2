import React from 'react'
import Container from '../Page/Container'
import Image from '../Page/Image'
import Flex from '../Page/Flex'
import Button from '../Page/Button'
import profileone from '/src/assets/Group 1000006797.png'

const Work = () => {
  return (
     <Container className={"h-[1263px] "}>
<div className="mt-[60px] ">
    <picture>
        <Image imgSrc={profileone} className={"mx-auto"}/>
    </picture>

    <h4 className="text-center text-[48px] font-opensans text-[#192239] font-bold">Work Showcase </h4>
   
</div>
<Flex className={"gap-x-25 mt-[70px]"}>
 <Button text={"All"} className={"text-[20px] font-semibold   text-[#6C7D93] focus:text-[#FF7628]"}/>   
 <Button text={"Digital Mkt"} className={"text-[20px] font-semibold   text-[#6C7D93] focus:text-[#FF7628]"}/>   
 <Button text={"Branding"} className={"text-[20px] font-semibold   text-[#6C7D93] focus:text-[#FF7628]"}/>  
 <Button text={"Content Mkt"} className={"text-[20px] font-semibold   text-[#6C7D93] focus:text-[#FF7628]"}/>   
 <Button text={"Social Media Mkt"} className={"text-[20px] font-semibold   text-[#6C7D93] focus:text-[#FF7628]"}/>   
</Flex>
<Flex className={"justify-between mt-[50px]"}>
 <div className="w-[370px] h-[400px] bg-[#F5F7FA] rounded-[25px]"></div>   
 <div className="w-[600px] h-[400px] bg-[#F5F7FA] rounded-[25px]"></div>   
 <div className="w-[370px] h-[400px] bg-[#F5F7FA] rounded-[25px]"></div>   
</Flex>
<Flex className={"mt-[30px] justify-between pb-[100px]"}>
 <div className="w-[550px] h-[430px] bg-[#F5F7FA] rounded-[25px]"></div>   
 <div className="w-[400px] h-[430px] bg-[#F5F7FA] rounded-[25px]"></div>   
 <div className="w-[400px] h-[430px] bg-[#F5F7FA] rounded-[25px]"></div>   
</Flex>



    
    </Container>
  )
}

export default Work