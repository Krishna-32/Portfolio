import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Men() {
  const img = useRef();

  useGSAP(() => {
    gsap.to(img.current, {
      y: 50,
      scrollTrigger: {
        trigger: img.current,
        start: "5% 50%",
        end: "90% 50%",
        scrub: 5,
        markers: false,
      },
    });
  });

  return (
    <div className="px-4">
      <div className="relative overflow-hidden w-full h-screen">
        <img
          ref={img}
          className="scale-110 w-full h-screen object-contain bg-gradient-to-b from-grayStart to-grayEnd"
          src="/gucci/man.png"
          alt="bags"
        />

        <div className="flex items-center justify-center absolute top-24 font-[gucci-bold] text-[.8vw] w-full">
          <span className="bg-white/10 text-white px-2 py-1 rounded-sm ">
            MEN
          </span>
        </div>

        <div className="main w-full h-[20vw] absolute top-[50%]">
          <div className="moveable flex flex-col gap-6 items-center text-white font-[gucci-bold]">
            <span className="text-3xl font-[gucci-medium]">Shoes</span>

            <button className="bg-black/10 backdrop-blur-lg border-[1.5px] border-white text-white text-[.8vw] px-6 py-4 rounded-sm cursor-pointer">
              EXPLORE MEN'S COLLECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Men;
