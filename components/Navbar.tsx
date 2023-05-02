import React from 'react'
import Link from 'next/link'
import Drawermenu from '@/components/Drawermenu'
function Navbar() {
  return (
    <div className="nav h-[623px] relative 2xl:h-[822px] w-full">
    <div className="bg-[#120085]/[0.4] absolute w-full h-[623px] 2xl:h-[822px]">
    <img src="/../assets/image 12.png" alt="avatar" className="ml-[56px] my-[9px] lg:hidden "/>
    <div className="container mx-auto relative lg:block hidden">
      <div className="bg-[white] flex justify-between items-center ">
      <img src="/../assets/image 12.png" alt="avatar" className="ml-[56px] my-[9px]"/>
      <div className="flex flex-row mr-[45px] ">
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pb-[39px] hover:text-[#5940F3]">About</a>
        <a href="" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] first-letter:pl-[42px] pb-[39px] hover:text-[#5940F3] ">Video</a>
        <Link href="/image" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3]">Image</Link>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3]">Investing</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3]">Companies</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3]">Tourism</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] pr-[42px] hover:text-[#5940F3]">Loaction</a>
        <button className="bg-[#5940F3] mt-[24px] mb-[29px] py-[10px] font-[400px] text-[15px] leading-[24px] tracking-[0.02em] px-[33.5px] pr-[33.5px] text-[#FFFFFF]">Contact</button>
      </div>
      </div>
    </div>
    <div className="lg:hidden sm:block absolute top-[26px] right-[6%]">
     <Drawermenu/>
    </div>
    </div>
    </div>
  )
}

export default Navbar