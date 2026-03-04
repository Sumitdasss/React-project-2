import React from 'react'
import Container from '../Page/Container'
import Image from '../Page/Image'
import Flex from '../Page/Flex'
import profileone from '/src/assets/Group 1000006797.png'
import profiletwo from '/src/assets/pexels-freestockpro-9822732.jpg'
import Button from '../Page/Button'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";




const Review = () => {
  return (
   <Container className={"h-[600px]"}>
<Flex className={"justify-between mt-[130px]"}>
<div className="  ">
    <Image imgSrc={profileone}/>
    <h3 className=' text-[48px] text-[#192239] pt-[15px] font-opensans font-bold'>Client Review</h3>
    <p className='text-[#6C7D93] text-[20px] pt-[10px]  font-paprika '>people use digital devices instead<br></br> of visiting physical shops, digital <br></br> marketing campaigns are <br></br> becoming more prevalent and <br></br> efficient.  </p>
    <div className=" mt-[10px]">
      <Button text={<FaAngleLeft/>} className={"px-6 py-6 text-white text-[30px] bg-[#FF7628]/25 rounded-[50%] focus:bg-[#FF7628] "}/>
      <Button text={<FaAngleRight/>} className={"px-6 py-6 text-white text-[30px] bg-[#FF7628]/25 rounded-[50%] focus:bg-[#FF7628] ml-[30px] "}/>
    </div>
    
</div>



<div className="w-[1050px] ">
    <Flex className={"justify-between"}>
<div className="w-125 h-112.5 bg-[#D8EAFF] rounded-[20px] p-[50px]">
    <p className='text-[#6C7D93] text-[20px]  font-paprika '>Content Marketing is the<br></br> other fold of online<br></br> advertisement. If you are <br></br>looking to build. digital <br></br>marketing campaigns are<br></br> becoming more prevalent<br></br> and efficient. </p>

<Flex className={" h-[100px] items-center mt-[30px]"}>
    <div className="w-[95px] h-[95px]    relative z-10 font-opensans   after:absolute after:right-[0px]  after:bottom-[0px] after:h-[35px] after:w-[35px] after:rounded-[50%] after:bg-[#FF7628] after:content-['']">
    <Image imgSrc={profiletwo} className={"w-full h-full object-cover rounded-[50%]"}/>
    </div>
    <div className=" ml-[40px]">
        <h4 className='text-[#222222] text-[25px] font-opensans font-semibold'>Jane Cooper</h4>

        <p className='text-[#222222] text-[18px] font-medium font-opensans pt-[10px]'>Fashion Designer</p>
    </div>
</Flex>

</div>
<div className="w-125 h-112.5 bg-[#D8EAFF] rounded-[20px] p-[50px]">
  <p className='text-[#6C7D93] text-[20px]  font-paprika '>Content Marketing is the<br></br> other fold of online<br></br> advertisement. If you are <br></br>looking to build. digital <br></br>marketing campaigns are<br></br> becoming more prevalent<br></br> and efficient. </p>

<Flex className={" h-[100px] items-center mt-[30px]"}>
    <div className="w-[95px] h-[95px]    relative z-10 font-opensans   after:absolute after:right-[0px]  after:bottom-[0px] after:h-[35px] after:w-[35px] after:rounded-[50%] after:bg-[#FF7628] after:content-['']">
    <Image imgSrc={profiletwo} className={"w-full h-full object-cover rounded-[50%]"}/>
    </div>
    <div className=" ml-[40px]">
        <h4 className='text-[#222222] text-[25px] font-opensans font-semibold'>Eleanor Pena</h4>

        <p className='text-[#222222] text-[18px] font-medium font-opensans pt-[10px]'>Architecture</p>
    </div>
</Flex>




</div>
</Flex>


</div>


</Flex>

   </Container>
  )
}

export default Review