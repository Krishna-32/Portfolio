import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Test2() {

  const main = useRef();
  const innerDiv = useRef();


  return (
    <div ref={main} className='relative w-full h-screen bg-blue-300 flex justify-center items-center uppercase font-formulab text-[10vw] overflow-hidden'>
      Test2
    </div>
  );
}

export default Test2;
