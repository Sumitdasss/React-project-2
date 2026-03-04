import React from 'react'
import Container from '../Page/Container'
import Flex from '../Page/Flex'
import Image from '../Page/Image'
import profile from '/src/assets/Group 1000006797.png'
import profiletwo from '/src/assets/results 1.png'
import profilethree from '/src/assets/social-media 1.png'
import profilefour from '/src/assets/social-marketing 1.png'
import Button from '../Page/Button'

const Service = () => {
  return (
    <Container className={"h-[850px] "}>
<div className="mt-[60px] ">
    <picture>
        <Image imgSrc={profile} className={"mx-auto"}/>
    </picture>

    <h4 className="text-center text-[48px] text-[#192239] font-bold">Our Services</h4>
    <p className='text-[#6C7D93] text-[20px]  font-paprika pt-[5px] text-center'>We have been providing great<br></br> flooring solutions service.</p>
</div>



     <Flex className={"justify-between mt-[60px]"}>
        <div className="w-[400px] h-[425px] bg-[#EBF7E9] rounded-[20px] p-[50px]">
            <picture>
                <Image imgSrc={profiletwo} className={"mx-auto"}/>
            </picture>

            <h4 className='text-center text-[30px] text-[#202427] font-semibold pt-[15px]'>Marketing Strategy</h4>
            <p className='text-center text-[20px] font-paprika text-[#6C7D93] font-normal pt-[15px]'>Social Media has changed <br></br>the way we interact & do<br></br> business while creating</p>
            <div className="mt-[60px] flex justify-center ">
            <Button text={<span className="relative z-10">Read more</span>} className={"text-[20px] font-opensans z-10 text-[#202427] font-bold relative after:absolute after:content-[''] after:-left-[14px]   after:w-[33px] after:h-[33px] after:z-1  after:rounded-[50%] after:bg-[#FF7628]"}/>
            </div>
        </div>
        <div className="w-[400px] h-[425px] bg-[#D8EAFF] rounded-[20px] p-[50px]">
            <picture>
                <Image imgSrc={profilethree} className={"mx-auto"}/>
            </picture>

              <h4 className='text-center text-[30px] text-[#202427] font-semibold pt-[15px]'>Marketing Strategy</h4>
            <p className='text-center text-[20px] font-paprika text-[#6C7D93] font-normal pt-[15px]'>Social Media has changed the way we interact & do business while creating a new avenue.</p>
            <div className="mt-[30px] flex justify-center ">
            <Button text={<span className="relative z-10">Read more</span>} className={"text-[20px] font-opensans z-10 text-[#202427] font-bold relative after:absolute after:content-[''] after:-left-[14px]   after:w-[33px] after:h-[33px] after:z-1  after:rounded-[50%] after:bg-[#FF7628]"}/>
            </div>
        </div>
        <div className="w-[400px] h-[425px] bg-[#FBF1EC] rounded-[20px] p-[50px]">
            <picture>
                <Image imgSrc={profilefour} className={"mx-auto"}/>
            </picture>

              <h4 className='text-center text-[30px] text-[#202427] font-semibold pt-[15px]'>Marketing Strategy</h4>
            <p className='text-center text-[20px] font-paprika text-[#6C7D93] font-normal pt-[15px]'>Content Marketing is the<br></br> other fold of online<br></br> advertisement. If you are<br></br> looking to build</p>
            <div className="mt-[30px] flex justify-center ">
            <Button text={<span className="relative z-10">Read more</span>} className={"text-[20px] font-opensans z-10 text-[#202427] font-bold relative after:absolute after:content-[''] after:-left-[14px]   after:w-[33px] after:h-[33px] after:z-1  after:rounded-[50%] after:bg-[#FF7628]"}/>
            </div>
        </div>
        
    </Flex>   
    </Container>
  )
}

export default Service