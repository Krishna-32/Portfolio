import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add({
         isMobile: "(max-width: 1023px)",
         isDesktop: "(min-width: 1024px)"
      }, (context) => {
        let {isMobile, isDesktop} = context.conditions;
        if(isDesktop){
          gsap.from('.first', {
            x: '-10vw',
            opacity: 0,
            duration: 1,
            ease: 'stepped.inOut',
          });
          gsap.from('.second', {
            x: '37vw',
            opacity: 0,
            duration: 1,
            ease: 'stepped.inOut',
          });
          gsap.from('.third', {
            x: '-10vw',
            opacity: 0,
            duration: 1,
            ease: 'stepped.inOut',
          });
        }

        if(isMobile){
          gsap.from(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'sine.inOut',
          });
        }
      });
    });

    

    return () => ctx.revert(); // Cleanup on unmount
  }, [containerRef]);

  

  return (
    <div ref={containerRef} className='wrapper h-[60vh] lg:h-screen w-full bg-blackk flex justify-center items-center'>
      <div className='flex flex-col justify-center h-1/2 lg:h-full font-seasonr uppercase text-[16vw] tracking-[-.2rem] leading-[14vw] lg:leading-[12.2vw]  text-whitee overflow-visible'>
        <span className='first overflow-visible lg:-translate-x-[5.5vw]'>Welcome</span>
        <span className='second overflow-visible translate-x-[33.5vw]'>to my</span>
        <span className='third overflow-visible lg:-translate-x-[5.5vw]'>Studio</span>
      </div>
    </div>
  )
}

export default Hero