import Bag from "../svgs/Bag";
import User from "../svgs/User";
import Search from "../svgs/Search";
import Menu from "../svgs/Menu";
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cross from "../svgs/cross";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {

  const text = useRef();
  const svg = useRef();
  const menu = useRef();
  const background = useRef();

  useGSAP(()=>{
    gsap.to(text.current, {
      scale: 0.1,
      y:-140,
      color:"black",
      opacity: 100,
      scrollTrigger:{
        trigger:text.current,
        start:"12% 0%",
        end:"25% 5%",
        scrub:1,
        markers:false,
      }
    })
  })

  useGSAP(()=>{
    gsap.to(svg.current, {
      color:"black",
      scrollTrigger:{
        trigger:text.current,
        start:"12% 0%",
        end:"25% 5%",
        scrub:1,
        markers:false,
      }
    })
  })

  useGSAP(()=>{
    gsap.to(menu.current, {
      color:"black",
      scrollTrigger:{
        trigger:text.current,
        start:"12% 0%",
        end:"25% 5%",
        scrub:1,
        markers:false,
      }
    })
  })

  useGSAP(()=>{
    gsap.to(background.current, {
      y:0,
      scrollTrigger:{
        trigger:text.current,
        start:"12% 0%",
        end:"25% 5%",
        scrub:1,
        markers:false,
      }
    })
  })



  return (<>
    <div ref={background} className="bg-white w-full h-[4.5vw] -translate-y-[4.5vw]">
      <div className="flex items-center w-full h-full pl-20 font-[gucci-bold] text-[12px]">
        <span className="flex items-center gap-1 cursor-pointer group">
          <Cross className="transition-transform duration-300 group-hover:rotate-45 "/> &nbsp;
          <p>Contact Us</p>
        </span>
      </div>
    </div>

    <div className="flex justify-end items-center text-white px-20 h-96">


      <div className="flex items-center gap-2 absolute top-6">

        <div ref={svg} className="flex gap-7 text-[22px] cursor-pointer">

          {[<Bag />, <User />, <Search />, <Menu />].map((items, idx) => {
            return <span key={idx}>{items}</span>;
          })}

        </div>

        <span ref={menu} className="text-[12px] font-[gucci-bold] cursor-pointer">
            MENU
        </span>

      </div>

    </div>
        
    <span ref={text} className='absolute w-full text-white/60 font-[gucci-main] text-[20.5vw] -top-[3.5vw] tracking-[5vw] flex pl-16 cursor-pointer'>
      <h1>GUCCI</h1>
    </span>

    </>);
}

export default Navbar;
