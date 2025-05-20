import React from 'react'
import Navbar from './components/Navbar'
import Hero from './modules/Hero'
import Work from './modules/Work'
import LocomotiveScroll from "locomotive-scroll";
import Dot from './components/Dot';
import About from './modules/About';
import SvgAnimation from './modules/SvgAnimation';
import Footer from './modules/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-blackk h-full w-full lg:cursor-none relative'>
      <div className='fixed z-50 w-full'>
        <Navbar />
      </div>

      <div id='hero-section'>
        <Hero />
      </div>

      <div id='work-section'>
        <Work />
      </div>

      <div id='about-section'>
        <About />
      </div>

      <div>
        <SvgAnimation />
      </div>

      <div>
        <Footer />
      </div>

      <div className='hidden lg:block fixed inset-0 pointer-events-none z-[9999]'>
        <Dot />
      </div>
      <Analytics />
    </div>
  )
}

export default App