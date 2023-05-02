import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Section5() {
  useEffect(()=>{
     AOS.init({duration:2000})
  },[])
  return (
    <><div className="container mx-auto " data-aos="fade-up">
        <h3 className="font-[Noto serif] font-normal text-[35px] leading-[56px] tracking-[0.02em] text-center pt-[187px]">Noah's Ark Sports Science College <br/> Investing</h3>
        <div className="grid  mt-[77px] md:grid-cols-1 xl:grid-cols-2 grid-cols-1">
          <div className="w-full h-[455px] px-[15px] sm:px-[0px]">
          <img src="/../assets/Rectangle 1257.png" alt="avatar" className="w-full h-[100%] object-cover "/>
          </div>
          <div className="flex flex-col ">
       <div className="flex flex-col ml-[2px] sm:ml-[48px] mt-[50px] h-[128px] sm:flex-row sm:px-[0px] px-[15px] ">
        <div className="flex flex-col sm:border-r  sm:border-[#EDEDED]">
       <div className="flex flex-row">
       <img src="/../assets/Cvator.png"alt="avatar " className="w-[40px] h-[44px] "/>
       <h3 className="font-[Noto Serif] font-normal text-[28px] leading-[44.8px] tracking-[0.02em]
text-[#120085] sm:pl-[11px]">Construction Projection</h3>
       </div>
       <p className="font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em] text-[#505056] pt-[20px] w-full sm:w-[439px] h-[54px]">Pokhara is situated in the very beautiful heart of Nepal and offers many opportunities for tourism.</p>
       </div>
       <a href="" className="font-[Noto Serif] font-normal text-[15px] leading-[24px] tracking-[0.02em] text-[#505056] pl-[27px] pt-[38px] flex flex-row">Learn More <img src="/../assets/Vector 2arrow.svg" alt="avatar" className=" w-[9px] h-[6px] mt-[10px] ml-[7px]"/></a>
       </div>
       <div className="flex sm:flex-row ml-[2px] sm:ml-[48px] mt-[70px] h-[128px] flex-col sm:px-[0px] px-[15px]  ">
        <div className="flex flex-col sm:border-r sm:border-[#EDEDED]">
       <div className="flex flex-row">
       <img src="/../assets/Calvactor.png"alt="avatar " className="w-[40px] h-[44px] "/>
       <h3 className="font-[Noto Serif] font-normal text-[28px] leading-[44.8px] tracking-[0.02em]
text-[#120085] pl-[11px]">Financial Projection</h3>
       </div>
       <p className="font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em] text-[#505056] pt-[20px] sm:w-[439px] h-[54px] w-full">Tourism opportunities include boating, cycling, homestay in traditional village, paragliding, ultralight flights, zip wire, bungee jumping and, of course, trekking.</p>
       </div>
       <a href="" className="font-[Noto Serif] font-normal text-[15px] leading-[24px] tracking-[0.02em] text-[#505056] pl-[27px] pt-[91px] sm:pt-[38px] flex flex-row">Learn More <img src="/../assets/Vector 2arrow.svg" alt="avatar" className="text-[#505056] w-[9px] h-[6px] mt-[10px] ml-[7px]"/></a>
       </div>

      </div>

        </div>
        </div>
    </>
  )
}

export default Section5