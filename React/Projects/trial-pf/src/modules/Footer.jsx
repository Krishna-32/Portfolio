import React, { useEffect, useState } from "react";


function Footer() {

  const handleClick = (url) => {
    window.open(url, '_blank');
  }

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

    <div className='w-full h-screen bg-light_green flex flex-col items-center relative rounded-tl-3xl rounded-tr-3xl'>
        <div className='w-full h-[75vh] flex flex-col justify-center items-center leading-[5.5vw] font-black font-mediumNeue tracking-tight text-blackk text-[12vw] uppercase'>

            <span>let's</span><br />
            <span>have a</span><br />
            <span>quick chat!</span>

        </div>

        <div className='flex flex-col items-center gap-3' >
            <button  onClick={()=>handleClick('https://www.instagram.com/krix.naa/')} className='bg-blackk px-5 flex items-center gap-2 py-3 rounded-full'><span className='text-whitee uppercase' >Send me a dm</span> <div className='pl-6'><div className='w-2 h-2 bg-whitee rounded-full'></div></div></button>
            OR <br />
            <button  onClick={()=>handleClick('mailto:krishnagupta33937@gmail.com')} className='border-blackk border-2 px-5 flex items-center gap-2 py-3 rounded-full'><span className='text-black uppercase'>Write an email</span><div className='pl-6'><div className='w-2 h-2 bg-blackk rounded-full'></div></div></button>

        </div>

        <div className='absolute w-[31.68rem] h-56 flex justify-between mt-64 scale-75'>
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

    
  )
}

export default Footer