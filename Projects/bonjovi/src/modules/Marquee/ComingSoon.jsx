import React, { useEffect } from "react";
import gsap from "gsap";

function ComingSoon() {
  useEffect(() => {
    gsap.to(".marquee", {
      x: -360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="w-full h-[5vmin] flex justify-center items-center">
      <div className="bg-black text-whitee text-[.8vw] font-founder uppercase py-2 flex gap-2 overflow-hidden">
        {Array.from({ length: 25 }).map((_, index) => (
          <div className="marquee flex-shrink-0" key={index}>
            <span>- Coming Soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComingSoon;
