import React from 'react'
import Navbar from './components/Navbar'
import Hero from './modules/Hero'
import Work from './modules/Work'
import LocomotiveScroll from "locomotive-scroll";
import Dot from './components/Dot';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-blackk h-full w-full lg:cursor-none relative'>
      <div className='hidden lg:block z-[99]'>
        <Dot />
      </div>
      <div className='fixed z-50 w-full'>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <Work />
      </div>
    </div>
  )
}

export default App