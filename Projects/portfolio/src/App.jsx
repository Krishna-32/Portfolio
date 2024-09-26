import React from 'react'
import Navbar from './components/Navbar'
import Hero from './modules/Hero'
import Work from './modules/Work'
import LocomotiveScroll from "locomotive-scroll";

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-blackk h-full w-full'>
      <div>
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