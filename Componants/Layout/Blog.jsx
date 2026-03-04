
import React from 'react'
import Container from '../Page/Container'
import Image from '../Page/Image'
import Flex from '../Page/Flex'

import profile from '/src/assets/Group 1000006797.png'
import profileone from '/src/assets/pexels-freestockpro-9822732.jpg'
import profiletwo from '/src/assets/pexels-rccbtn-15406294.jpg'
import profilethree  from '/src/assets/pexels-rccbtn-15406294.jpg'
import Button from '../Page/Button'
const Blog = () => {
  return (
      <Container className={"h-[944px] "}>
<div className="mt-[60px] ">
    <picture>
        <Image imgSrc={profile} className={"mx-auto"}/>
    </picture>

    <h4 className="text-center text-[48px] font-opensans text-[#413F45] font-bold">Our Latest Blog
</h4>
    <p className='text-[#6C7D93] text-[20px]  font-opensans pt-[5px] text-center'>We provide digital experience services to startups<br></br> and small businesses.
</p>
</div>



     <Flex className={"justify-between  mt-[60px] h-[350px]"}>
        <div className="h-full">
 <div className="w-[450px] h-[550px] bg-[#EBF7E9] rounded-[20px] mt-[50px]">


  <div className="w-full h-[320px] bg-gray-400 rounded-tl-[20px] rounded-tr-[20px]">
    <Image imgSrc={profileone} className={"w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]"}/>
  </div>
           
    
            <h4 className=' text-[30px] font-opensans text-[#413F45] font-semibold pt-[10px] pl-[30px] leading-9'>How to Be Ahead <br></br>of Stock Changes</h4>
            <p className='text-[20px] font-opensans text-[#6C7D93] font-normal pt-[10px] pl-[30px]'>By John  - 5 Comments
</p>
        <div className="mt-[20px] ml-[45px]">
            <Button text={<span className="relative z-10">Read more</span>} className={"text-[20px] font-opensans z-10 text-[#202427] font-bold relative after:absolute after:content-[''] after:-left-[14px]   after:w-[33px] after:h-[33px] after:z-1  after:rounded-[50%] after:bg-[#FF7628]"}/>
            </div>    
        </div>

        </div>
        <div className="h-full">
 <div className="w-[450px] h-[550px] bg-[#EBF7E9] rounded-[20px] mt-[50px]">


  <div className="w-full h-[320px] bg-gray-400 rounded-tl-[20px] rounded-tr-[20px]">
    <Image imgSrc={profiletwo} className={"w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]"}/>
  </div>
           
    
            <h4 className=' text-[30px] font-opensans text-[#413F45] font-semibold pt-[10px] pl-[30px] leading-9'>Online Reputation<br></br> And Management</h4>
            <p className='text-[20px] font-opensans text-[#6C7D93] font-normal pt-[10px] pl-[30px]'>By John  - 10 Comments
</p>
        <div className="mt-[20px] ml-[45px]">
            <Button text={<span className="relative z-10">Read more</span>} className={"text-[20px] font-opensans z-10 text-[#202427] font-bold relative after:absolute after:content-[''] after:-left-[14px]   after:w-[33px] after:h-[33px] after:z-1  after:rounded-[50%] after:bg-[#FF7628]"}/>
            </div>    
        </div>

        </div>
        <div className="h-full">
 <div className="w-[450px] h-[550px] bg-[#EBF7E9] rounded-[20px] mt-[50px]">


  <div className="w-full h-[320px] bg-gray-400 rounded-tl-[20px] rounded-tr-[20px]">
    <Image imgSrc={profilethree} className={"w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]"}/>
  </div>
           
    
            <h4 className=' text-[30px] font-opensans text-[#413F45] font-semibold pt-[10px] pl-[30px] leading-9'>Tips To Move Your<br></br> Project More Forward
</h4>
            <p className='text-[20px] font-opensans text-[#6C7D93] font-normal pt-[10px] pl-[30px]'>By John  - 15 Comments
</p>
        <div className="mt-[20px] ml-[45px]">
            <Button text={<span className="relative z-10">Read more</span>} className={"text-[20px] font-opensans z-10 text-[#202427] font-bold relative after:absolute after:content-[''] after:-left-[14px]   after:w-[33px] after:h-[33px] after:z-1  after:rounded-[50%] after:bg-[#FF7628]"}/>
            </div>    
        </div>

        </div>
    
       
        
    </Flex>   
    
    
    </Container>
  )
}

export default Blog