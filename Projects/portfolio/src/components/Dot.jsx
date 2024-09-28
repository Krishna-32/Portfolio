import React, { useEffect, useState } from 'react'

function Dot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div 
      className="fixed w-3 h-3 bg-white rounded-full translate-y-2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'transform cubic-bezier(0.19,1,0.22,1) 1s',
      }}
    />
  )
}

export default Dot