import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Test1() {

  const main = useRef();
  const innerDiv = useRef();


  return (
    <div ref={main} className='relative w-full h-screen bg-pink-300 flex justify-center items-center uppercase font-formulab text-[10vw] overflow-hidden'>
      Test1
    </div>
  );
}

export default Test1;
