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
    <div ref={innerDivRef} className='absolute w-full flex flex-col gap-20 top-full'>
      {React.Children.map(children, (child, index) => (
        <div 
          className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center uppercase font-formulab text-[10vw]`}
        >
          <span className={`${index % 2 === 0 ? 'ml-32' : '-mr-40'}`}>{child}</span>
        </div>
      ))}
    </div>
  );
};

export default InnerDiv;
