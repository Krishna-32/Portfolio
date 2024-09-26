import React from 'react'

function Hero() {
  return (
    <div className='wrapper h-[60vh] lg:h-screen w-full bg-blackk flex justify-center items-center'>
      <div className='flex flex-col justify-center h-1/2 lg:h-full font-seasonr uppercase text-[16vw] tracking-[-.2rem] leading-[14vw] lg:leading-[12.2vw]  text-whitee overflow-visible'>
        <span className='overflow-visible lg:-translate-x-[5vw]'>Welcome</span>
        <span className='overflow-visible translate-x-[30vw]'>to my</span>
        <span className='overflow-visible lg:-translate-x-[5vw]'>Studio</span>
      </div>
    </div>
  )
}

export default Hero