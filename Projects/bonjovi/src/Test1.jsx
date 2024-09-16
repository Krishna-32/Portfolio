import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Test1() {

  const main = useRef();
  const innerDiv = useRef();

  useEffect(() => {
    // Pin the main div
    ScrollTrigger.create({
      trigger: main.current,
      start: "top top", 
      end: "max",
      pin: true,
      pinSpacing: false,
      markers: true
    });

    // Animate the second div's Y translation
    // gsap.to(innerDiv.current, {
    //   top: 0, // Move the div to translateY(0)
    //   scrollTrigger: {
    //     trigger: main.current,
    //     start: "top top", // Start animation when main div hits the top
    //     end: "bottom top", // End animation when the bottom of the main div hits the top
    //     scrub: true, // Smooth scrolling effect
    //     markers: false, // Debugging tool
    //   },
    // });
  }, []);

  return (
    <div ref={main} className='relative w-full h-screen bg-pink-300 flex justify-center items-center uppercase font-formulab text-[10vw]'>
      Test1

      {/* <div ref={innerDiv} className='absolute w-full bg-green-300 flex justify-center items-center uppercase font-formulab text-[10vw] flex-col gap-[50vw] top-full'>
        <span>Hi</span>
        <span>Hello</span>
        <span>Amigos</span>
        <span>Namaste</span>
        <span>Ola</span>
      </div> */}
    </div>
  );
}

export default Test1;
