import React, { useRef, useEffect } from 'react'
import InnerDiv from '../components/InnerDiv'
import { gsap } from "gsap";

function Work() {

  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(max-width: 1023px)", () => {
        gsap.from(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'sine.inOut',
        });
      });
    });

    

    return () => ctx.revert(); // Cleanup on unmount
  }, [containerRef]);

  return (
    <div ref={containerRef} className='mt-[10vmax] mb-[20vmax] lg:mb-[10vmax]'>
        <InnerDiv idx='01' title='Pintrest clone' img='./img/pintrest.png' link='https://pintrest-clone-theta.vercel.app/'/>        
        <InnerDiv idx='02' title='Bonjovi' img='./img/bonjovi.png' link='https://bonjovi-bay.vercel.app/' />
        <InnerDiv idx='03' title='Gucci clone' img='./img/gucci.png' link='https://gucci-clone.vercel.app/' />
        <InnerDiv idx='04' title='Scrapper' img='./img/scrapper.png' link='https://github.com/Krishna-32/Linkedin-Scrapper/tree/main'/>
        
    </div>
  )
}

export default Work