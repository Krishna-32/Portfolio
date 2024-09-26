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
    <div ref={containerRef} className='lg:my-20'>
        <InnerDiv idx='01' title='Gucci clone' />
        <InnerDiv idx='02' title='Bonjovi' />
        <InnerDiv idx='03' title='Gucci clone' />
        <InnerDiv idx='04' title='Bonjovi' />        
        <InnerDiv idx='05' title='Gucci clone' />
        <InnerDiv idx='06' title='Bonjovi' />        
    </div>
  )
}

export default Work