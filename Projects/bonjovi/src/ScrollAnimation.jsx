// ScrollAnimation.js
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ children, duration = 1000 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${duration}`, // Adjust to control how long it stays pinned
        pin: true,
        scrub: true,
        markers: false // For debugging; you can remove later
      });

      gsap.to(containerRef.current.querySelector('.scroll-content'), {
        yPercent: -100, // Moves the inner content up while scrolling
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${duration}`,
          scrub: 1,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, [duration]);

  return (
    <div ref={containerRef} className='relative overflow-hidden'>
      {children}
    </div>
  );
};

export default ScrollAnimation;
