import React from 'react'
import Container from '../Page/Container'
import Flex from '../Page/Flex'
import Image from '../Page/Image'
import profile from '/src/assets/element.png'
import profileone from '/src/assets/Group 1000006797.png'
import profiletwo from '/src/assets/Frame.png'
import profilethree from '/src/assets/Frame (1).png'
import profilefour from '/src/assets/Frame (2).png'
import profilefive from '/src/assets/Frame (3).png'
import profilesix from '/src/assets/Frame (4).png'
import profileseven from '/src/assets/Frame (5).png'
import profileeight from '/src/assets/download (1).jpg'
import profilenine from '/src/assets/download.jpg'

const About = () => {
  return (
   <Container className={"h-[725px]"}>
<Flex >
<div className="relative mt-[100px] w-[500px]">
<div className="w-[440px] h-[467px]  absolute  ml-[90px]">
    <Image imgSrc={profileeight} className={"w-full h-full rounded-[50px]"}/>
</div>
<Image imgSrc={profile} className={"mt-[130px]"}/>
<div className="w-[300px] h-[280px]  absolute  top-[270px]">
     <Image imgSrc={profilenine} className={"w-full h-full rounded-[50px]"}/>
</div>


</div>
<div className="mt-[100px]  h-[500px] ml-[250px]">
    <Image imgSrc={profileone}/>
    <h3 className=' text-[48px] text-[#192239] font-bold'>Who We Are</h3>
    <p className='text-[#6C7D93] text-[20px]  font-paprika '>We are a Dhaka based Digital Communication <br></br>Agency committed to creating an actionable <br></br>strategy, online marketing & technology<br></br> solution for our partners. As a<br></br> multidisciplinary company, we operate as a unified, </p>
    <Flex className={"mt-[50px] gap-x-25"}>
    <Image imgSrc={profiletwo}/>
    <Image imgSrc={profilethree}/>
    <Image imgSrc={profilefour}/>
    </Flex>
    <Flex className={"mt-[50px] gap-x-25"}>
    <Image imgSrc={profilefive}/>
    <Image imgSrc={profilesix}/>
    <Image imgSrc={profileseven}/>
    </Flex>
</div>

</Flex>

   </Container>
  )
}

export default About