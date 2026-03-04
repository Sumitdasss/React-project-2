import React from 'react'
import Container from '../Page/Container'
import Flex from '../Page/Flex'
import Image from '../Page/Image'
import profile from '/src/assets/Group 1000006797.png'
import profiletwo from '/src/assets/download (1).jpg'
import profilethree from '/src/assets/download.jpg'
import Button from '../Page/Button'


const Bannerone = () => {
  return (
    <div className='bg-[url(/src/assets/Header.png)] bg-cover bg-center bg-no-repeat  h-[960px]'>
        <Container>
<Flex className={"justify-between "}>
<div className="">
<picture>
<Image imgSrc={profile} className={"mt-[208px]"}/>
</picture>  
<h1 className="text-[#192239] text-[72px] font-opensans  font-bold pt-[15px]">We Are Digital<br></br><span className="text-[#FF7628]">Marketing</span> Agency</h1>
<p className="text-[#6C7D93] text-[20px]  font-paprika pt-[15px]">Use customer data to build great and solid product<br></br> experiences that convert. Digital marketing’s<br></br> development has changed the way brands and<br></br> businesses use technology for marketing. </p>
<Button text={"Get Free Quote"} className={"bg-[#FF7628] text-[20px] font-opensans font-semibold hover:bg-[#FF7628]/90 text-white px-6 py-4 rounded-[50px] mt-[30px]"}/>
</div>
<div className="relative mt-[430px]">
    <div className="w-[460px] h-[430px]   rounded-[50px]">
        <Image imgSrc={profiletwo} className={"w-full h-full object-cover rounded-[50px] "}/>
</div>
<div className="w-[460px] h-[430px]  absolute -top-[250px] left-[300px]   rounded-[50px]">
    <Image imgSrc={profilethree} className={"w-full h-full object-cover rounded-[50px]"}/>
</div>
</div>



</Flex>

        </Container>
        

    </div>
  )
}

export default Bannerone