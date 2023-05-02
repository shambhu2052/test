import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Section3 = () => {
  useEffect(()=>{
     AOS.init({duration:2000})
  },[])
  return (
    <>
    <div className="2xl:w-[full] sm:w-full md:mt-[0px] mb-[646px] md:mb-[0px]" data-aos="fade-up">
       <h3 className="font-[400] text-[35px] leading-[56px] tracking-[0.02em] text-[#000000] pt-[122px] text-center">Our Gallery</h3>
      <div className="grid  mt-[43px] h-[720px]  md:grid-cols-2 grid-cols-1 px-[15px] sm:px-[0px]">
        <div className="w-full h-[720px] overflow-hidden">
         <img src="/../assets/Rectangle 1269.png" alt="avatar" className="w-full h-[100%] object-cover hover:scale-110"/>
        </div>
        <div className="flex flex-col w-full h-[720px]">
          <div className="grid grid-cols-2 h-[50%]">
            <div className="h-[360px] w-full overflow-hidden">
            <img src="/../assets/Rectangle 1272w.png" alt="avatar" className="object-cover h-[100%] w-full hover:scale-110 "/>
            </div>
           <div className="w-full h-[360px] overflow-hidden">
           <img src="/../assets/Rectangle 1270t.png" alt="avatar" className="h-[100%] object-cover w-full hover:scale-110"/>
           </div>
          </div>
          <div className="grid grid-cols-2 h-[50%]">
            <div className="w-full h-[360px] overflow-hidden">
            <img src="/../assets/Rectangle 1273.png" alt="avatar" className="h-[100%] object-cover w-full hover:scale-110"/>
            </div>
         <div className="w-full h-[360px] overflow-hidden">
         <img src="/../assets/Rectangle 1271girl.png" alt="avatar" className="h-[100%] object-cover w-full hover:scale-110"/> 
         </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section3