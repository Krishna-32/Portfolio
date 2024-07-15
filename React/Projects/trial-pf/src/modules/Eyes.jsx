import React, { useState, useEffect } from 'react';

function Eyes() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateEyePosition = (eyeCenterX, eyeCenterY, maxDistance) => {
    const dx = cursorPosition.x - eyeCenterX;
    const dy = cursorPosition.y - eyeCenterY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(maxDistance, Math.hypot(dx, dy));
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const leftEyePosition = calculateEyePosition(window.innerWidth * 0.4, window.innerHeight * 0.5, 20);
  const rightEyePosition = calculateEyePosition(window.innerWidth * 0.6, window.innerHeight * 0.5, 20);
  const leftPupilPosition = calculateEyePosition(window.innerWidth * 0.4, window.innerHeight * 0.5, 55);
  const rightPupilPosition = calculateEyePosition(window.innerWidth * 0.6, window.innerHeight * 0.5, 55);

  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.5" className='relative w-full h-full bg-cover bg-[url("/frog/bg-transformed.jpeg")] flex items-center justify-center'>
        <div className='relative'>
          <img className='w-full max-w-4xl' src="frog/frog.png" alt="Frog" />
          <div className='absolute w-[36rem] h-56 top-60 left-40 flex justify-between'>
            <div className='w-[14.4rem] h-full bg-white rounded-full flex items-center justify-center'>
              <div
                className='bg-black w-3/4 h-3/4 rounded-full flex items-center justify-center'
                style={{
                  transform: `translate(${leftEyePosition.x}px, ${leftEyePosition.y}px)`,
                }}
              >
                <div
                  className='bg-white w-1/4 h-1/4 rounded-full'
                  style={{
                    transform: `translate(${leftPupilPosition.x}px, ${leftPupilPosition.y}px)`,
                  }}
                ></div>
              </div>
            </div>
            <div className='w-[14.4rem] h-full bg-white rounded-full flex items-center justify-center'>
              <div
                className='bg-black w-3/4 h-3/4 rounded-full flex items-center justify-center'
                style={{
                  transform: `translate(${rightEyePosition.x}px, ${rightEyePosition.y}px)`,
                }}
              >
                <div
                  className='bg-white w-1/4 h-1/4 rounded-full'
                  style={{
                    transform: `translate(${rightPupilPosition.x}px, ${rightPupilPosition.y}px)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
