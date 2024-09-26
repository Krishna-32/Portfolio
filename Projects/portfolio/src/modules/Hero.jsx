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
        if (isDesktop) {
          gsap.from('.one, .three', {
            x: '-5vw',
            opacity: 0,
            duration: 1,
            ease: 'sine.inOut',
          })
          gsap.to('.first, .third', {
            x: '10vw',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
              markers: true,
            },
          })

          gsap.from('.two', {
            x: '5vw',
            opacity: 0,
            duration: 1,
            ease: 'sine.inOut',
          })
          gsap.to('.second', {
            x: '30vw',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
              markers: true,
            },
          })
        }

        if(isMobile){
          gsap.from(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'sine.inOut',
          });
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, [containerRef]);

  return (
    <div ref={containerRef} className='wrapper h-[60vh] lg:h-screen w-full bg-blackk flex justify-center items-center'>
      <div className='flex flex-col justify-center h-1/2 lg:h-full font-seasonr uppercase text-[16vw] tracking-[-.2rem] leading-[14vw] lg:leading-[12.2vw] lg:-translate-x-[4vw]  text-whitee overflow-visible'>
        <div className='one overflow-visible relative'>
          <span className='first overflow-visible absolute '>Welcome</span>
          <span className='first overflow-visible opacity-0'>Welcome</span>
        </div>
        <div className='two overflow-visible relative'>
          <span className='second overflow-visible absolute translate-x-[33.5vw] lg:translate-x-[39vw]'>to my</span>
          <span className='second overflow-visible opacity-0 translate-x-[33.5vw] lg:translate-x-[39vw]'>to my</span>
        </div>
        <div className='three overflow-visible relative'>
          <span className='third overflow-visible absolute'>Studio</span>
          <span className='third overflow-visible opacity-0'>Studio</span>
        </div>
      </div>
    </div>
  )
}

export default Hero