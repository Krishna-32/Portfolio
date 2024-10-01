import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

function SvgAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Clamp y values to -50 to 0 and 0 to 50 based on the mouse's position relative to the SVG height
    const clampedY = y < rect.height / 2
      ? gsap.utils.clamp(-50, 0, y - rect.height / 2)
      : gsap.utils.clamp(0, 50, y - rect.height / 2);

    // Adjust x values to range from 10 to 190 based on the mouse's position relative to the SVG width
    const clampedX = gsap.utils.mapRange(0, rect.width, 10, 190, x);

    setMousePosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    // Reset to initial state
    gsap.to("path", {
      attr: { d: `M 10 0 Q 100 0 190 0` },
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  useEffect(() => {
    // Update the path dynamically when mousePosition changes
    const path = document.querySelector("path");
    if (path) {
      gsap.to(path, {
        attr: { d: `M 10 0 Q ${mousePosition.x} ${mousePosition.y} 190 0` },
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
      });
    }
  }, [mousePosition]);

  return (
    <div className="w-full h-auto mt-[10vw]">
      <svg
        viewBox="0 -30 200 60"
        className="w-full h-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} // Reset path when mouse leaves
      >
        <path
          d="M 10 0 Q 100 0 190 0"
          stroke="#d5d4d3"
          strokeWidth=".5"
          fill="transparent"
        />
      </svg>
    </div>
  );
}

export default SvgAnimation;
