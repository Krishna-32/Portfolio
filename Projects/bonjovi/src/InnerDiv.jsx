// InnerDiv.js
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InnerDiv = ({ children }) => {
  const innerDivRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll through innerDiv while pinning
      gsap.to(innerDivRef.current, {
        yPercent: -100, // Moves the inner div up while scrolling
        ease: "none",
        scrollTrigger: {
          trigger: innerDivRef.current.parentElement, // Parent element is the trigger
          start: "top top",
          end: "+=1000", // Adjust to control how long it stays pinned
          scrub: 1,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={innerDivRef} className='absolute w-full flex justify-center items-center uppercase font-formulab text-[10vw] flex-col gap-[50vw] top-full'>
      {children}
    </div>
  );
};

export default InnerDiv;
