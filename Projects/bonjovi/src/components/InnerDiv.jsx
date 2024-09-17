import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InnerDiv = ({ children }) => {
  const innerDivRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(innerDivRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: innerDivRef.current.parentElement,
          start: "top top",
          end: "+=1000",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={innerDivRef}
      className="absolute w-full flex flex-col gap-20 top-full"
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index} // Add key for each child
          className={`relative flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } items-center uppercase font-formulab text-[10vw] w-full px-5`}
        >
          <span
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
          >
            {child}
          </span>
        </div>

      ))}
    </div>
  );
};

export default InnerDiv;
