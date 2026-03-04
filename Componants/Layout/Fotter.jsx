import React from 'react'

import Container from '../Page/Container'
import Image from '../Page/Image'
import Flex from '../Page/Flex'

const Fotter = () => {
  return (
     <div className="  h-[370px] mt-[100px]">
    <Container >


<Flex className={"justify-between mt-12"}>
    <div className="">
<Image imgSrc={"/src/assets/Logo.png"}/>
<p className='text-[#6C7D93] tex-[18px] font-opensans font-normal leading-7 pt-[50px]'>Install any demo or template with a single click. You<br></br> can mix and match all the demos & templates. Every<br></br> demo can be turned into one or multi-page.</p>

    </div>
    <div className="">
        <h4 className="text-[22px] text-[#413F45] font-semibold">Features</h4>
        <ul className="text-[20px] text-[#6C7D93] font-medium leading-[35px] pt-[20px]">
            <li>Home</li>
            <li>About</li>
            <li>Benifit</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
       

    </div>
    <div className="">
         <h4 className="text-[22px] text-[#413F45] font-semibold">Products</h4>
        <ul className="text-[20px] text-[#6C7D93] font-medium leading-[35px] pt-[20px]">
            <li>  Task Management</li>
            <li>Company growth</li>
            <li>Time tracking</li>
            
        </ul>

      


    </div>
    <div className="">
        <h4 className="text-[22px] text-[#413F45] font-semibold">Support</h4>
        <ul className="text-[20px] text-[#6C7D93] font-medium leading-[35px] pt-[20px] capitalize">
            <li>Customer service</li>
            <li>Accessibility</li>
            <li>Contact us</li>
           
        </ul>


    </div>
   
</Flex>

<div className="w-full h-15  border-t-2 border-black/20 flex items-center justify-between mt-[50px]">
    <div className="flex mt-[20px]">
    <h4 className="text-[20px] text-[#6C7D93] font-medium pt-[12px]">@20201 Innovate.All rights reserved.</h4>
   
    </div>
<Flex className="mt-[20px] gap-x-10">
    <h4 className="text-[20px] text-[#6C7D93] font-normal">Privacy policy</h4>
    <h4 className="text-[20px] text-[#6C7D93] font-normal">Terms & condition</h4>
</Flex>
</div>

            </Container>
        </div>
  )
}

export default Fotter