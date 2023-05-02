import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function section2() {
  useEffect(()=>{
   AOS.init({duration:2000})
  },[])
  return (
    <>
    <div className="  flex gap-[51px] container mx-auto xl:flex-row md:flex-col md:gap-[0px]  flex-col  md:mb-[0px]" data-aos="fade-up">
      <div className="pt-[148px] 2xl:pt-[180px]">
        <h3 className="font-[Noto Serif] font-[400px] text-[35px] sm:ml-[0px] ml-[22px] leading-[56px] tracking-[0.02em] text-[#000000]">Concept 3D Animation</h3>
        <p className="font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em] h-[81px] sm:pl-[0px] pl-[22px]">Pokhara is situated in the very beautiful heart of Nepal and offers many opportunities for<br/> tourism</p>
        <div className="w-[169px] h-[62px] bg-[#5940F3] mt-[37px] rounded-[2px] sm:ml-[0px] ml-[22px]">
          <a href='#' className="font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em] text-[#FFFFFF] flex flex-row pl-[31px] pt-[18px] pb-[17px]">Learn More 
          <img src="/../assets/Vector 2.png" alt="avatar" className="w-[17px] h-[12px] text-[#FFFFFF] ml-[10px] mt-[9px]"/></a>
        </div>
      </div>
      <div className="w-full  md:h-[593px]  xl:h-[490px] h-[400px] ark mt-[69px] xl:ml-[5px]  lg:mx-[5px] relative 2xl:h-[582px]">
        <div className="w-full h-[400px] md:h-[593px] xl:h-[492px] absolute bg-[#000000]/[0.2] 2xl:h-[582px]">
        </div>
        <img src="/../assets/Vedio.png" alt="avatar" className="sm:left-[310px] sm:top-[155px] md:left-[477px] md:top-[240px] xl:left-[393px] xl:top-[200px] 2xl:left-[469px] 2xl:top-[237px] absolute h-[92px] top-[152px]  right-[64px] bottom-[180px]"/>
        <p className="font-[350px] sm:left-[566px] sm:top-[334px] xl:left-[714px] xl:top-[410px] 2xl:left-[903px] md:left-[70%] text-[15px] leading-[27.08px] tracking-[0.02em] absolute top-[332px] right-[35px] text-[#FFFFFF] 2xl:top-[487px] md:top-[490px] lg:left-[882px]">12:00</p>
        <div className="w-full h-[34px] absolute top-[364px] lg:top-[558px] sm:top-[367px] bg-black 2xl:top-[547px] md:top-[558px] xl:top-[455px]"></div>
      </div>
    </div>
    </>
  )
}

export default section2