import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';


function Dot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const [prev, setPrev] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (dets) => {
      setPosition({ x: dets.clientX, y: dets.clientY });

      setPrev((prev) => {
        var xdiff = dets.clientX - prev.x;
        var ydiff = dets.clientY - prev.y;

        const clampedXDiff = gsap.utils.clamp(0.8, 1.2, xdiff);
        const clampedYDiff = gsap.utils.clamp(0.8, 1.2, ydiff);
        setScale({ x: clampedXDiff, y: clampedYDiff });

        setTimeout(() => {
          setScale({ x: 1, y: 1 });
        }, 100); 

        // console.log(clampedXDiff, clampedYDiff);
        return { x: dets.clientX, y: dets.clientY }; // Update prev position
      });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div 
      className="fixed w-3 h-3 bg-white rounded-full translate-y-2 "
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `scale(${scale.x}, ${scale.y})`,
      }}
    />
  );
}

export default Dot;
