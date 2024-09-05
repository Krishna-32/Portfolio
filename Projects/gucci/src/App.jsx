import React, { useRef, useEffect } from 'react';
import Main from './modules/Main';
import Navbar from './components/Navbar';
import Women from './modules/Women';
import Men from './modules/Men';
import LocomotiveScroll from 'locomotive-scroll';
import Featured from './modules/Featured';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Services from './modules/Services';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const movingDiv = useRef();

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  useGSAP(()=>{
    gsap.to(movingDiv.current, {
      height:70,
      scrollTrigger:{
        trigger:movingDiv.current,
        start:"1% 0%",
        end:"14% 5%",
        scrub:1,
        markers:false,
      }
    })
  })

  return (
    <>
    <div ref={movingDiv} className='fixed w-full overflow-hidden top-0 z-50'>
        <Navbar />
    </div>

    <div data-scroll-container className='overflow-y-hidden'>
      
      <div><Main /></div>
      <div><Women /></div>
      <div><Men /></div>
      <div><Featured /></div>
      <div><Services /></div>
      <div><Footer /></div>

    </div>
    </>
  );
}

export default App;
