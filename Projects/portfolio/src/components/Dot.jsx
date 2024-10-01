import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';

function Dot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const [prev, setPrev] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (dets) => {
      setPosition({ x: dets.clientX, y: dets.clientY });
      setIsVisible(true);

      setPrev((prev) => {
        var xdiff = dets.clientX - prev.x;
        var ydiff = dets.clientY - prev.y;

        const clampedXDiff = gsap.utils.clamp(0.8, 1.2, xdiff);
        const clampedYDiff = gsap.utils.clamp(0.8, 1.2, ydiff);
        setScale({ x: clampedXDiff, y: clampedYDiff });

        setTimeout(() => {
          setScale({ x: 1, y: 1 });
        }, 100); 

        return { x: dets.clientX, y: dets.clientY };
      });
    };

    const hideDot = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseout', hideDot);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseout', hideDot);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed w-3 h-3 bg-white rounded-full"
      style={{
        left: `${position.x + 15}px`,
        top: `${position.y}px`,
        transform: `scale(${scale.x}, ${scale.y})`,
      }}
    />
  );
}

export default Dot;
