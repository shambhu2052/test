import React,{useEffect} from 'react'
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
function Gallery() {
    let data=[
        {
            image:"/../assets/Rectangle 1269a.png"
        },
        {
            image:"/../assets/Rectangle 1270b.png"
        },
        {
            image:"/../assets/Rectangle 1271c.png"
        },
        {
            image:"/../assets/Rectangle 1272d.png"
        },
        {
            image:"/../assets/Rectangle 1269e.png"
        },
        {
            image:"/../assets/Rectangle 1270f.png"
        },
        {
            image:"/../assets/Rectangle 1271g.png"
        },
        {
            image:"/../assets/Rectangle 1272h.png"
        },
        {
            image:"/../assets/Rectangle 1269i.png"
        },
        {
            image:"/../assets/Rectangle 1270j.png"
        },
        {
            image:"/../assets/Rectangle 1271k.png"
        },
        {
            image:"/../assets/Rectangle 1272l.png"
        },
        {
            image:"/../assets/Rectangle 1269m.png"
        },
        {
            image:"/../assets/Rectangle 1270n.png"
        }
    
    
    ]
    useEffect(()=>{
        AOS.init({duration:2000})
    })
  return (
    <div className="container mx-auto " data-aos="fade-up">
        <h3 className="font-[Noto Serif] font-normal text-[35px] leading-[56px] tracking-[0.02em] text-[#000000] pt-[75px] text-center animate__animated animate__fadeInUp ">Our Gallery</h3>
        <p className="font-[350px] text-[15px] leading-[27.08px] tracking-[0.02em] text-[#505056] text-center pt-[10px]">homestay in traditional village, paragliding, ultralight flights, zip wire, bungee jumping and, of course, trekking.</p>
        <hr className="line1"/>
        <div className="grid md:grid-cols-3 mt-[32px] gap-[20px] lg:grid-cols-4 grid-cols-2 sm:px-[0px] px-[15px]">
        {
            data.map((i)=>(
          <div className="w-full h-[292px] overflow-hidden">
            <img src={i.image} alt="avatar" className="w-full h-[100%] object-cover hover:scale-110"/>
            </div>
            ))
        }
        </div>
    </div>
  )
}
export default Gallery