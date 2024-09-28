import React, { useRef } from "react";
import { gsap } from "gsap";

function InnerDiv(props) {
  const imgRef = useRef(null); // Create a ref for the image
  var rotate = 0;
  var diffrot = 0;

  const animation = (dets) => {
    var diff = dets.clientY - dets.target.getBoundingClientRect().top;

    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(imgRef.current, {  // Target the specific image using the ref
      opacity: 1,
      scale: 1,
      y: diff,
      x: `${dets.clientX / window.innerWidth * 100 - 55}vw`,
      ease: "power",
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5)
    });
  };

  const resetAnimation = () => {
    gsap.to(imgRef.current, {  // Reset the specific image using the ref
      opacity: 0,
      scale: 0,
      ease: "power",
    });
  };

  return (
    <div className="wrapper h-full w-full bg-blackk flex justify-center items-center">
      <div onMouseMove={animation} onMouseLeave={resetAnimation} className="w-full flex flex-col justify-center items-center font-seasonr text-whitee group">
        <div className="h-[18vw] lg:w-[35vw] lg:h-[6vw] flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-end leading-[5vw] overflow-visible lg:gap-4 uppercase gap-2">
          <span className="text-[5vw] lg:text-[2vw] italic lg:-translate-y-5 overflow-visible group-hover:text-whitee group-hover:translate-x-2 transition-transform duration-300 ease-in-out lg:text-greyy">
            {props.idx}
          </span>

          <span className="text-[7vw] lg:text-[4vw] font-seasonb overflow-visible group-hover:text-whitee group-hover:translate-x-2 transition-transform duration-300 ease-in-out lg:text-greyy">
            {props.title}
          </span>

          {/* Bind the image to the ref */}
          <img ref={imgRef} className="img z-[99] absolute w-[20vw] h-[20vw] opacity-0 object-fit scale-0 hidden lg:block" src={props.img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default InnerDiv;
