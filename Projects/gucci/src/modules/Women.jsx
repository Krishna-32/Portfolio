import { useGSAP } from '@gsap/react'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function Women() {

  const movingDiv = useRef();
  const movingDiv2 = useRef();
  const img = useRef();
  const img2 = useRef();

  useGSAP(()=>{
    gsap.to(movingDiv.current, {
      y: 180, 
      scrollTrigger:{
        trigger:movingDiv.current,
        start:"-270% 50%",
        end:"-110% 50%",
        scrub:1,
        markers:false,
      }
    })
  })
  useGSAP(()=>{
    gsap.to(movingDiv2.current, {
      y: 180, 
      scrollTrigger:{
        trigger:movingDiv2.current,
        start:"-270% 50%",
        end:"-110% 50%",
        scrub:1,
        markers:false,
      }
    })
  })

  useGSAP(()=>{
    gsap.to(img.current, {
      y: 50, 
      scrollTrigger:{
        trigger:img.current,
        start:"5% 50%",
        end:"90% 50%",
        scrub:5,
        markers:false,
      }
    })
  })

  useGSAP(()=>{
    gsap.to(img2.current, {
      y: 50, 
      scrollTrigger:{
        trigger:img2.current,
        start:"5% 50%",
        end:"90% 50%",
        scrub:5,
        markers:false,
      }
    })
  })



  return (
    // MAIN
    <div className='flex gap-4 px-4 py-4'>

      {/* LEFT */}
      <div className='relative overflow-hidden'>
        <img ref={img} className='scale-110' src="/gucci/bags.avif" alt="bags" />

        <div className='flex items-center justify-center absolute top-24 font-[gucci-bold] text-[.8vw] w-full'>
          <span className='bg-white/10 text-white px-2 py-1 rounded-sm '>
            WOMEN
          </span>
        </div>

        <div className='main w-full h-[20vw] absolute top-[37vw]'>

          <div ref={movingDiv} className='moveable flex flex-col gap-6 items-center text-white font-[gucci-bold]'>
          
            <span className='text-3xl font-[gucci-medium]'>
              Handbags
            </span>

            <button className='bg-black/10 backdrop-blur-lg border-[1.5px] border-white text-white text-[.8vw] px-6 py-4 rounded-sm cursor-pointer'>
              EXPLORE THE COLLECTION
            </button>

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className='relative overflow-hidden'>
        <img ref={img2} className='scale-110' src="/gucci/eyewear.avif" alt="bags" />

        <div className='flex items-center justify-center absolute top-24 font-[gucci-bold] text-[.8vw] w-full'>
          <span className='bg-white/10 text-white px-2 py-1 rounded-sm '>
            WOMEN
          </span>
        </div>

        <div className='main w-full h-[20vw] absolute top-[37vw]'>

          <div ref={movingDiv2} className='moveable flex flex-col gap-6 items-center text-white font-[gucci-bold]'>
          
            <span className='text-3xl font-[gucci-medium]'>
              Eyewear
            </span>

            <button className='bg-black/10 backdrop-blur-lg border-[1.5px] border-white text-white text-[.8vw] px-6 py-4 rounded-sm cursor-pointer'>
              EXPLORE THE NEW STYLES
            </button>

          </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Women