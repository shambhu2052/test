import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Section6() {
  useEffect(()=>{
      AOS.init({duration:2000})
  })
  return (
    <>
    <div className="mt-[138px] bg-[#F9F9F9]" data-aos="fade-up">
        <h3 className="font-[Noto Serif] text-[35px] font-normal leading-[56px] tracking-[0.02em] text-[#505056] text-center pt-[58px]">Our Companies</h3>
        <div className="grid  gap-[20px] container mx-auto mt-[44px] lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 px-[15px]">
         <div className="w-full h-[310px] rounded-[2px] bg-[#FFFFFF] box1 mb-[95px]">
          <div className="flex flex-row ml-[108px] sm:ml-[0px]">
           <img src="/../assets/image 21.png" alt="avatar " className="h-[47px] w-[47px] ml-[70px] mt-[23px] mb-[18px] "/>
           <img src="/../assets/image 27.png" alt="avatar" className="w-[78px] h-[41px] mt-[26px] ml-[40px] mr-[70px] mb-[21px]"/>
          </div>
            <h3 className="font-semibold text-[17px] leading-[23.97px] tracking-[0.02em] text-center text-[#1F1F1F]">Noah’s Ark Creation Museum
Investment Co. Ltd</h3>
            <div className="w-[212px] h-[124px] mt-[18px] ml-[19px] ">
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Company Name:<span className="font-bold">13358153 </span></p>
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Company Type: <br/><span className="font-bold">Private Limited Company</span></p>
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Date: 26 April 2021</p>
            </div>
         </div>
         
         <div className="w-full h-[310px] border-[1px]  rounded-[2px] bg-[#FFFFFF] mb-[95px] box1">
          
         <div className="flex flex-row ml-[108px] sm:ml-[0px]">
           <img src="/../assets/image 21.png" alt="avatar " className="h-[47px] w-[47px] ml-[70px] mt-[23px] mb-[18px] "/>
           <img src="/../assets/image 30.png" alt="avatar" className="w-[37px] h-[45px] mt-[26px] ml-[40px] mr-[70px] mb-[21px]"/>
          </div>
            <h3 className="font-semibold text-[17px] leading-[23.97px] tracking-[0.02em] text-center text-[#1F1F1F]">Noah’s Ark Sports Science <br/> College</h3>
            <div className="w-[212px] h-[124px] mt-[18px] ml-[19px] ">
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">DCR Registration:<span className="font-bold">195883 </span></p>
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Company Type: <br/><span className="font-bold">Ipsum Pvt Ltd.</span></p>
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Date: 6 April 2021</p>
            </div>

          </div>
  
          <div className="w-full h-[310px] border-[1px] border-[solid] bg-[#FFFFFF] rounded-[2px] mb-[95px]">
          <div className="flex flex-row ml-[108px] sm:ml-[0px]">
           <img src="/../assets/image 21.png" alt="avatar " className="h-[47px] w-[47px] ml-[70px] mt-[23px] mb-[18px] "/>
           <img src="/../assets/image 30.png" alt="avatar" className="w-[37px] h-[45px] mt-[26px] ml-[40px] mr-[70px] mb-[21px]"/>
          </div>
            <h3 className="font-semibold text-[17px] leading-[23.97px] tracking-[0.02em] text-center text-[#1F1F1F]">Noah’s Ark Creation Museum
Investment Co. Ltd</h3>
            <div className="w-[212px] h-[124px] mt-[18px] ml-[19px] ">
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Company Name:<span className="font-bold">195883 </span></p>
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Company Type: <br/><span className="font-bold">Lorem Limited</span></p>
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Date: 6 April 2021</p>
            </div>
          </div>

          <div className="w-full h-[310px] bg-[#FFFFFF] rounded-[2px] mb-[95px]">
          <div className="flex flex-row ml-[108px] sm:ml-[0px]">
           <img src="/../assets/image 23.png" alt="avatar " className="h-[47px] w-[47px] ml-[70px] mt-[23px] mb-[18px] "/>
           <img src="/../assets/image 30.png" alt="avatar" className="w-[38px] h-[46px] mt-[26px] ml-[40px] mr-[70px] mb-[21px]"/>
          </div>
            <h3 className="font-semibold text-[17px] leading-[23.97px] tracking-[0.02em] text-center text-[#1F1F1F]">Noah’s Ark Agro Tourism &<br/> Homestays</h3>
            <div className="w-[212px] h-[124px] mt-[18px] ml-[19px] ">
             <p className="font-[350px] text-[15px] leading-[30.9px] tracking-[0.02em] text-[#505056]">Ragistration Pending......</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Section6