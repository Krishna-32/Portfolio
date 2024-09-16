import React, { useRef, useEffect } from 'react';
import Home from './modules/Home';
import Bg from './components/Bg';
import Navbar from './components/Navbar';
import Test1 from './Test1';
import Test2 from './Test2';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const innerDiv = useRef(null);
  const pin = useRef(null); // Reference for Test1 component

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the pin div (Test1)
      ScrollTrigger.create({
        trigger: pin.current,
        start: "top top",
        end: "+=1000", // Adjust to control how long it stays pinned
        pin: true,
        scrub: true,
        markers: true // For debugging; you can remove later
      });

      // Scroll through innerDiv while pinning
      gsap.to(innerDiv.current, {
        yPercent: -100, // Moves the inner div up while scrolling
        ease: "none",
        scrollTrigger: {
          trigger: pin.current,
          start: "top top",
          end: "+=1000", // Same end value as pinning
          scrub: 1,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className='wrapper'>
        <Navbar className="fixed z-[99] w-full top-0" />
        <div>
          <Home />
        </div>
        <div>
          <Bg color='blackk' bgcolor='whitee' title='Bon Jovi' date='1983 - 1984' />
        </div>
        <div>
          <Bg color='whitee' bgcolor='blackk' title='7800° Fahrenheit' date='1985 - 1986' />
        </div>
      
        <div ref={pin} className='relative overflow-hidden'>
          <Test1 />
          
          {/* The innerDiv you want to scroll through */}
          <div ref={innerDiv} className='absolute w-full flex justify-center items-center uppercase font-formulab text-[10vw] flex-col gap-[50vw] top-full'>
            <span>Hi</span>
            <span>Hello</span>
            <span>Amigos</span>
            <span>Namaste</span>
            <span>Ola</span>
          </div>
        </div>

        <Test2 />
      </div>
    </>
  );
}

export default App;
