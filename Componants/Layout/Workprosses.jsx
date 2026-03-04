import React from 'react'
import Container from '../Page/Container'
import Image from '../Page/Image'
import Flex from '../Page/Flex'

import profile from '/src/assets/Group 1000006797.png'
import profileone from '/src/assets/pexels-freestockpro-9822732.jpg'
import profiletwo from '/src/assets/pexels-rccbtn-15406294.jpg'
import profilethree  from '/src/assets/pexels-rccbtn-15406294.jpg'

const Workprosses = () => {
  return (
    <Container className={"h-[1500px] "}>
<div className="mt-[60px] ">
    <picture>
        <Image imgSrc={profile} className={"mx-auto"}/>
    </picture>

    <h4 className="text-center text-[48px] font-opensans text-[#192239] font-bold">Our creative process.
</h4>
    <p className='text-[#6C7D93] text-[20px]  font-opensans pt-[5px] text-center'>We provide digital experience services to startups<br></br> and small businesses.
</p>
</div>



     <Flex className={"justify-between  mt-[60px] h-[350px]"}>
        <div className="h-full">
 <div className="w-[600px] h-[260px] bg-[#EBF7E9] rounded-[20px] mt-[50px] p-[50px]">
           
    <h4 className=" pl-[15px] font-opensans relative z-10 font-opensans text-[20px] font-bold text-[#202427] after:absolute after:left-[0px] after:z-[-1] after:h-[33px] after:w-[33px] after:rounded-[50%] after:bg-[#FF7628] after:content-['']">
  Step-1
</h4>
            <h4 className=' text-[30px] font-opensans text-[#202427] font-semibold pt-[15px]'>Global SEO Research</h4>
            <p className='text-[20px] font-opensans text-[#6C7D93] font-normal pt-[15px]'>Practical tools and features make it easier<br></br> to build and manage your site.
</p>
           
        </div>

        </div>
        <div className="w-[800px] h-[350px] ">
<Image imgSrc={profileone} className={"w-full h-full object-cover rounded-[20px]"}/>
        </div>
       
        
    </Flex>   
     <Flex className={"justify-between  mt-[60px] h-[350px]"}>
        <div className="w-[800px] h-[350px] ">
 <Image imgSrc={profiletwo} className={"w-full h-full object-cover rounded-[20px]"}/>

        </div>

        <div className="h-full">
            <div className="w-[600px] h-[260px] bg-[#D8EAFF] rounded-[20px] mt-[50px] p-[50px]">
           
    <h4 className=" pl-[15px] font-opensans relative z-10 font-opensans text-[20px] font-bold text-[#202427] after:absolute after:left-[0px] after:z-[-1] after:h-[33px] after:w-[33px] after:rounded-[50%] after:bg-[#FF7628] after:content-['']">
  Step-2
</h4>
            <h4 className=' text-[30px] font-opensans text-[#202427] font-semibold pt-[15px]'>Social media integration</h4>
            <p className='text-[20px] font-opensans text-[#6C7D93] font-normal pt-[15px]'>Practical tools and features make it easier<br></br> to build and manage your site.
</p>
           
        </div>
        </div>
       
        
    </Flex>   

<Flex className={"justify-between  mt-[60px] h-[350px]"}>
        <div className="h-full">
 <div className="w-[600px] h-[260px] bg-[#FBF1EC] rounded-[20px] mt-[50px] p-[50px]">
           
    <h4 className=" pl-[15px] font-opensans relative z-10 font-opensans text-[20px] font-bold text-[#202427] after:absolute after:left-[0px] after:z-[-1] after:h-[33px] after:w-[33px] after:rounded-[50%] after:bg-[#FF7628] after:content-['']">
  Step-3
</h4>
            <h4 className=' text-[30px] font-opensans text-[#202427] font-semibold pt-[15px]'>Launching the Application</h4>
            <p className='text-[20px] font-opensans text-[#6C7D93] font-normal pt-[15px]'>Practical tools and features make it easier<br></br> to build and manage your site.
</p>
           
        </div>

        </div>
        <div className="w-[800px] h-[350px]  ">
             <Image imgSrc={profilethree} className={"w-full h-full object-cover rounded-[20px]"}/>
        </div>
       
       
    </Flex>   
    
    </Container>
  )
}

export default Workprosses