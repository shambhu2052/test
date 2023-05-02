import React from 'react'
import Link from 'next/link'
import Drawermenu from '@/components/Drawermenu'
function Navbar1() {
  return (
    <>
     
     <div className="w-full h-[101px] border-[1px] border-bottom-[#EDEDED] border-solid relative">
     <img src="/../assets/image 12.png" alt="avatar" className="ml-[56px] my-[9px] lg:hidden "/>
    <div className="container mx-auto lg:block hidden ">
    <div className="flex justify-between items-center ">
      <img src="/../assets/image 12.png" alt="avatar" className="ml-[56px] my-[9px] "/>
      <div className="flex flex-row mr-[45px] ">
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pb-[39px] pl-[45px] hover:text-[#5940F3] navb">About</a>
        <a href="" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] first-letter:pl-[42px] pb-[39px] hover:text-[#5940F3] navb">Video</a>
        <Link href="/image" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3] navb">Image</Link>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3] navb">Investing</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3] navb">Companies</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] hover:text-[#5940F3] navb">Tourism</a>
        <a href="#" className="font-[400px] text-[15px] leading-[24px] tracking-[0.02px] text-[#505056] pt-[34px] pl-[42px] pb-[39px] pr-[42px] hover:text-[#5940F3] navb">Loaction</a>
        <button className="bg-[#5940F3] mt-[24px] mb-[29px] py-[10px] font-[400px] text-[15px] leading-[24px] tracking-[0.02em] px-[33.5px] pr-[33.5px] text-[#FFFFFF]">Contact</button>
      </div>
      </div>
      </div>
      <div className="lg:hidden sm:block absolute top-[26px] right-[6%]">
     <Drawermenu/>
    </div>
      </div>
       

    </>
  )
}

export default Navbar1