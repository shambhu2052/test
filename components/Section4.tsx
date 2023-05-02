import React, { useEffect } from 'react'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Section4 = () => {
  useEffect(()=>{
          AOS.init({duration: 2000})
  },[])
  return (
    <>
    <div className="">
      <div className="" data-aos="fade-up" >
        <h3 className="font-[400px] font-[Noto Serrif] text-[35px] leading-[56px] tracking-[0.02em] text-[#1F1F1F] text-center pt-[123px]">Noah's Ark Sports Science College - Tourism</h3>
        <p className="font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em]  text-center text-[#505056] pt-[36px] w-full sm:px-[0px] px-[15px]">Pokhara is situated in the very beautiful heart of Nepal and offers many opportunities for tourism. It boasts seven lakes, is surrounded by hills and is located at the edge of the Annapurna Himalaya reaching 8000m in height. Tourism opportunities include boating, cycling, homestay in traditional village, paragliding, ultralight flights, zip wire, bungee jumping and, of course, trekking.</p>
        </div>
        <div className="grid  mt-[97px] lg:grid-cols-2 sm:grid-cols-1 " data-aos="fade-up">
          <div className="w-full h-[500px] px-[15px] sm:px-[0px]">
          <img src="/../assets/Rectangle 1257house.png" alt="avatar" className="w-full h-[100%] object-cover"/>
          </div>
         <div className="w-full h-[500px] bg-[#F9F9F9] px-[15px] sm:px-[0px] ">
            <h4 className="font-[400px] text-[28px] leading-[44.8px] tracking-[0.02em] pt-[69px] sm:pl-[59px]  ">Noah's Ark<br/>
Agro Tourism & Homestays</h4>
         <p className="font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em] sm:pl-[59px] pt-[28px] w-full pb-[97px] sm:w-[486px] h-[216px] 2xl:w-[667px]  animate_animated animate__fadeInUp animate_slow">Pokhara is situated in the very beautiful heart of Nepal and offers many opportunities for tourism. It boasts seven lakes, is surrounded by hills and is located at the edge of the Annapurna Himalaya reaching 8000m in height.<br/><br/>

Tourism opportunities include boating, cycling, homestay in traditional village, paragliding, ultralight flights, zip wire, bungee jumping and, of course, trekking.</p>
         </div>
         <div className="w-full h-[500px] bg-[#F9F9F9] sm:px-[0px] px-[15px] ">
         <h4 className="font-[400px] text-[28px] leading-[44.8px] tracking-[0.02em] text-[#2F2F2F] sm:pl-[77px] sm:pt-[112px] pr-[10px] sm:pr-[222px] w-full  animate_animated animate__fadeInUp animate_slow">Pokhara International AirPort</h4>
         <p className=" md:w-[692px]font-[350px] text-[15px] leading-[27.8px] tracking-[0.02em] pt-[31px] sm:pl-[77px] sm:pb-[96px]  sm:pr-[154px] 2xl:w-[837px] lg:w-[702px]  animate_animated animate__fadeInUp animate_slow">Pokhara is situated in the very beautiful heart of Nepal and offers many opportunities for tourism. It boasts seven lakes, is surrounded by hills and is located at the edge of the Annapurna Himalaya reaching 8000m in height.<br/><br/>
Tourism opportunities include boating, cycling, homestay in traditional village, paragliding, ultralight flights, zip wire, bungee jumping and, of course, trekking.</p>
         </div>
         <div className="w-full h-[500px] px-[15px] sm:px-[0px]">
        <img src="/../assets/Rectangle 1258aeroplane.png" alt="avatar" className="w-full h-[100%]"/>
         </div>
        </div>
    </div>
    </>
  )
}

export default Section4