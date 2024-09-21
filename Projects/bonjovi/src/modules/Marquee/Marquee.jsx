import React, { useEffect } from "react";
import "./Marquee.css";
import gsap from "gsap";

function Marquee() {
  useEffect(() => {
    gsap.to('.marquee', {
      x: 95,
      duration: 4,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <div className="bg-blackk w-full h-[65vmin] flex justify-center items-center">
      <div
        className="outline-text opacity-75 text-[10vw] font-formulab uppercase pt-8 flex gap-10 overflow-hidden"
      >
        {/* Rendering marquess with a map function for better scalability */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="marquee flex gap-10 flex-shrink-0" key={index}>
            <span>Next up</span>
            <span>—</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
