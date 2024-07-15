import React, { useRef } from 'react';
import Home from './modules/home/Home';
import Nav from './modules/Nav';
import Marquee from './modules/Marquee';
import "./App.css"
import About from './modules/about/About';
import Eyes from './modules/Eyes';
import Projects from './modules/Projects';
import Footer from './modules/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
      <div className=" main w-full relative z-[1]">

        <div className="absolute w-full z-40 "><Nav /></div>

        <div><Home /></div>

        <div><Marquee text = "ABOUT"/></div>

        <div ><About /></div>

        <div  className='min-h-screen bg-lime-800'><Eyes /></div>

        {/* <div><Marquee text = "PROJECTS"/></div> */}

        <div><Projects /></div>
        
        <div className='w-full relative z-[2]'><Footer /></div>

      </div>

    </>
  );
}

export default App;
