import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useScroll } from '../components/ScrollContext'; // Import the custom hook

function Home() {
  const headingRef = useRef();
  const { scrollCount, setScrollCount } = useScroll(); // Use the context
  const totalScrolls = 4; // Number of scrollable elements
  const [throttled, setThrottled] = useState(false); // Throttle state

  useEffect(() => {
    const headings = headingRef.current.querySelectorAll('.headings');

    const handleWheel = (event) => {
      // Exit if throttled
      if (throttled) return;

      // Scroll down
      if (event.deltaY > 0) {
        if (scrollCount < totalScrolls - 1) {
          console.log("Scrolling down");
          gsap.to(headings, {
            y: `-=${101}%`, // Move up
            duration: 1,
            ease: "power2.inOut",
          });
          setScrollCount((prevCount) => prevCount + 1);
        } else {
          // Reset to first heading if at the last one
          console.log("Resetting scroll to first heading");
          gsap.to(headings, {
            y: "0%", // Reset to the first heading
            duration: 1,
            ease: "power2.inOut",
          });
          setScrollCount(0);
        }
      } 
      // Scroll up
      else if (event.deltaY < 0 && scrollCount > 0) {
        console.log("Scrolling up");
        gsap.to(headings, {
          y: `+=${100}%`, // Move down
          duration: 1,
          ease: "power2.inOut",
        });
        setScrollCount((prevCount) => prevCount - 1);
      }

      // Set throttle
      setThrottled(true);
      setTimeout(() => setThrottled(false), 2000); // Reset throttle after 1 second
    };

    // Add event listener when the component mounts
    window.addEventListener("wheel", handleWheel);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollCount, throttled, totalScrolls]); // Dependencies for the effect

  return (
    <div className="w-full h-screen fixed flex flex-col items-center top-24 text-white leading-none">
      <div ref={headingRef} className="overflow-hidden h-[8.5em] flex flex-col items-center">
        <span className="headings font-bellina text-9xl tracking-tighter">Earth</span>
        <span className="headings font-bellina text-9xl tracking-tighter">Mars</span>
        <span className="headings font-bellina text-9xl tracking-tighter">Neptune</span>
        <span className="headings font-bellina text-9xl tracking-tighter">Jupiter</span>
      </div>
      <div className="font-gilroy text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
      <div className="w-96 h-px bg-gradient-to-r from-transparent via-white to-transparent mt-4"></div>
    </div>
  );
}

export default Home;
