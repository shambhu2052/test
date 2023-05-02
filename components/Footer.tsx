import React,{useEffect} from "react";
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Footer() {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <>
      <div className="w-full h-full bg-[#000000] pt-[60px] pb-[80px] relative " data-aos="fade-up">
        <div className="container mx-auto pb-[50px] ">
          <div className="grid  mt-[60px] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-[228px] gap-[46px] px-[45px] sm:px-[0px]">
            <div className="flex flex-col">
              <img
                src="/../assets/image 17btnlogo.png"
                alt="avatar"
                className="w-[145px] h-[145px] mb-[27px]"
              />
              <p className="font-bold text-base leading-[28.88px] tracking-[0.02em] text-[#CCFF00]">
                Noah's Ark Sports Science College
              </p>
              <div className="flex flex-row mt-[27px]">
                <img
                  src="/../assets/Vectorfacebook.svg"
                  alt="avatar"
                  className="w-[8.5px] h-[17px]"
                />
                <img
                  src="/../assets/Vectortwitter.svg"
                  alt="avatar"
                  className="w-[20.64px] h-[16.22px] ml-[26px]"
                />
                <img
                  src="/../assets/Vectoryoutube.svg"
                  alt="avatar"
                  className="w-[18.21px] h-[13.36px] ml-[26px]"
                />
                <img
                  src="/../assets/vectorcircle.svg"
                  alt="avatar"
                  className="w-[14.57px] h-[14.57px] ml-[26px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-[Noto Serif] font-normal text-xl leading-[32px] tracking-[0.02em] text-[#EDEDED] ">
                For General Information
              </h3>
              <p className="font-light text-base laeding-[28.88px] tracking-[0.02em] pt-[16px] text-[#CCFF00]">
                info@noahsarknepal.com
              </p>
              <h3 className="font-normal text-xl leading-[32px] tracking-[0.02em] text-[#EDEDED] pt-[44px]">
                For Investment Information
              </h3>
              <p className="text-base text-[#CCFF00] font-light leading-[28.88px] tracking-[0.02em] pt-[16px]">
                investment@noahsarknepal.com
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-[Noto Serif] font-normal text-xl leading-[32px] tracking-[0.02em] text-[#EDEDED]">
                Contact
              </h3>
              <p className="w-[252px] h-[189px] font-light text-[15px] leading-[27.08px] tracking-[0.02em] text-[#EDEDED] pt-[16px] lg:w-[178px]">
                GM Dr Ngmar Jang Gurung (Nepal) +977 9810 21 63 53; (UK) +44
                7787 08 86 05 (Now in UK [Since 25. Nov 2020])
                <br />
                <br />
                Dipa Gurung Rai
                <br />
                (UK) +44 7428 10 50 17
              </p>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#383737]">

        </div>
       {/* ? <hr className=" mt-[px] " /> */}
      </div>
    </>
  );
}

export default Footer;
