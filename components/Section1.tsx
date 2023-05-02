import React,{useEffect} from 'react'
import AOS from'aos'
import 'aos/dist/aos.css'
const Section1 = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
    <div className='flex  lg:relative overflow-hidden  lg:h-[623px] lg:flex-row flex-col' data-aos="fade-up">
      <img src="/../assets/Rectangle 12552.png" alt="avatar" className="2xl:w-[750px] 2xl:h-[472px] md:w-full lg:w-[475px] lg:h-[385px]  xl:w-[695px] h-[439px] 2xl:ml-[109px] sm:ml-[0px]  lg:ml-[109px] mt-[2px]  lg:mt-[70px] sm:px-[0px] px-[15px] z-30"/>
        <div className=" h-[650px] w-full lg:absolute top-[0%] xl:left-[747px] lg:left-[525px] lg:h-[549px] bg-[#98B7F6]/[0.12]">
           <h2 className="font-normal text-[35px] leading-[56px] tracking-[0.02em] text-[#000000] 2xl:w-[566px] 2xl:pl-[180px] sm:pl-[109px] px-[16px] pt-[59px] md:w-[456px] ">Who was the original<br/> Noah?</h2>
           <p className="font-[300px] text-[15px] leading-[27.08px] tracking-[0.02em] text-[#505056] pt-[27px] 2xl:pl-[180px]  sm:pl-[109px]  h-[162px] sm:w-[499px] px-[22px] md:w-[510px] 2xl:w-[42%] xl:w-[533px] lg:w-[495px] w-full">Noah lived around 4400* years ago somewhere in the Middle East. The world was totally evil and corrupt at this time so God decided to destroy all of Mankind with a flood. However, since Noah was a very good person, God decided to save him and his family in an Ark that Noah built.
               </p>        
          <div className=" mt-[30px] sm:mt-[34px] ml-[22px] sm:ml-[109px] bg-[#5940F3] w-[169px] h-[62px] rounded-[2px] 2xl:ml-[180px]">
            <a href="#" className="flex flex-row font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em] text-[#FFFFFF] pl-[31px] pt-[18px] pr-[10px] pb-[17px]">Learn More  < img src="/../assets/Vector 2.png" alt="avatar" className="w-[17px] h-[17px] ml-[10px] mt-[6px]"/></a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Section1