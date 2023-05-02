import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Map() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
    <div className="w-full h-[244px] px-[15px] sm:px-[0px]" data-aos="fade-up">
    <img src="/../assets/Rectangle 1261map.png" alt="avatar" className="w-full h-[100%] object-cover"/>
    </div>
  

    </>
  )
}

export default Map