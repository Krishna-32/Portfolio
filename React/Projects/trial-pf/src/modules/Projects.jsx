import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

function Projects() {

    const main = useRef();
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const outterCard = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const innerCard = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];


    const handleHoverStart = (index) => {
        cards[index].start({
            y: '0',
        })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({
            y: '100%',
        })
    }

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    useEffect(() => {
        
        ScrollTrigger.create({
            trigger: main.current,
            start: "850 top", 
            end: "max",
            pin: true,
            pinSpacing: false,
            markers: false,
          });
    
      }, []);

  return (
    <div ref={main} data-scroll data-scroll-section data-scroll-speed="-.04" className='w-full h-auto  bg-whitee rounded-tl-3xl rounded-tr-3xl flex flex-col gap-10'>
         <div className='flex flex-col gap-8 pt-20'>
            <h1 className='text-[3.5vw] px-16 font-regularNeue '>Featured projects</h1>
            <hr className='border-[#bdbdbd] border-[1.5px]'/>
        </div>

        <div className="cards w-full flex gap-10 px-16">

            <div className='w-full flex flex-col gap-4 '>

                <div className='flex items-center gap-2'>
                    <div className='w-2.5 h-2.5 bg-black rounded-full'></div>
                    <span className='font-regularNeue font-thin'>ANIME</span>
                </div>

                <motion.div onHoverStart={() => handleHoverStart(0)} onHoverEnd={() => handleHoverEnd(0)} onClick={()=>handleClick('https://anime-database-phi.vercel.app/')} className='card-container w-full h-[60vh] relative cursor-pointer'>

                    <h1 className='absolute z-[9] text-7xl text-dark_green font-regularNeue leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden'>{"ANIME".split('').map((item,index) => <motion.span
                    initial = {{y:"100%"}} 
                    animate = {cards[0]}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                    className='inline-block translate-y-full'
                    key={index}>
                        {item}</motion.span>)}</h1>

                    <div className='background w-full h-full bg-green-300 flex justify-center items-center rounded-lg'>
                    
                        <div className='main-img w-1/2 h-1/2 flex items-center justify-center bg-green-400'>
                            <img src="project/tan.png" alt="img" />
                        </div>

                    </div>

                </motion.div>

                <div className='w-full flex gap-3'>
                    {['React', 'Javascript', 'CSS'].map((item, index) =>(
                        <button key={index} className='border-black border-2 px-5 rounded-full uppercase font-regularNeue'>{item}</button>
                    ))}
                </div>
                
            </div>

            <div className='w-full flex flex-col gap-4 '>

                <div className='flex items-center gap-2'>
                    <div className='w-2.5 h-2.5 bg-black rounded-full'></div>
                    <span className='font-regularNeue font-thin'>JOKEPT</span>
                </div>

                <motion.div onHoverStart={() => handleHoverStart(1)} onHoverEnd={() => handleHoverEnd(1)} onClick={()=>handleClick('https://jokept.vercel.app/')} className='card-container w-full h-[60vh] relative rounded-lg bg-red-500 cursor-pointer'>

                    <h1 className='absolute z-[9] text-7xl text-dark_green font-regularNeue leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden'>{"JOKEPT".split('').map((item,index) => <motion.span
                    initial = {{y:"100%"}} 
                    animate = {cards[1]}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                    key={index} 
                    className='inline-block translate-y-full'>
                        {item}</motion.span>)}</h1>

                    <div className='background w-full h-full bg-yellow-300 flex justify-center items-center rounded-lg'>
                    
                        <div className='main-img w-1/2 h-1/2 flex items-center justify-center bg-yellow-400'>
                            <img src="project/zen.png" alt="img" />
                        </div>

                    </div>
                </motion.div>

                <div className='w-full flex gap-3'>
                    {['React', 'Javascript', 'CSS'].map((item, index) =>(
                        <button key={index} className='border-black border-2 px-5 rounded-full uppercase font-regularNeue'>{item}</button>
                    ))}
                </div>
            </div>
        </div>

        <div className="cards w-full flex gap-10 px-16">

            <div className='w-full flex flex-col gap-4' >

                <div className='flex items-center gap-2'>
                    <div className='w-2.5 h-2.5 bg-black rounded-full'></div>
                    <span className='font-regularNeue font-thin'>ANIME</span>
                </div>

                <motion.div onHoverStart={() => handleHoverStart(2)} onHoverEnd={() => handleHoverEnd(2)} onClick={()=>handleClick('https://anime-database-phi.vercel.app/')} className='card-container w-full h-[60vh] relative rounded-lg bg-red-500 cursor-pointer'>

                    <h1 className='absolute z-[9] text-7xl text-dark_green font-regularNeue leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden'>{"ANIME".split('').map((item,index) => <motion.span
                    initial = {{y:"100%"}} 
                    animate = {cards[2]}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                    className='inline-block translate-y-full'
                    key={index}>
                        {item}</motion.span>)}</h1>

                    <div className='background w-full h-full bg-blue-300 flex justify-center items-center rounded-lg'>
                    
                        <div className='main-img w-1/2 h-1/2 flex items-center justify-center bg-blue-400'>
                            <img src="project/ino.png" alt="img" />
                        </div>

                    </div>

                </motion.div>

                <div className='w-full flex gap-3'>
                    {['React', 'Javascript', 'CSS'].map((item, index) =>(
                        <button key={index} className='border-black border-2 px-5 rounded-full uppercase font-regularNeue'>{item}</button>
                    ))}
                </div>
                
            </div>

            <div className='w-full flex flex-col gap-4'>

                <div className='flex items-center gap-2'>
                    <div className='w-2.5 h-2.5 bg-black rounded-full'></div>
                    <span className='font-regularNeue font-thin'>JOKEPT</span>
                </div>

                <motion.div onHoverStart={() => handleHoverStart(3)} onHoverEnd={() => handleHoverEnd(3)} onClick={()=>handleClick('https://jokept.vercel.app/')} className='card-container w-full h-[60vh] relative rounded-lg bg-red-500 cursor-pointer'>

                    <h1 className='absolute z-[9] text-7xl text-dark_green font-regularNeue leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden'>{"JOKEPT".split('').map((item,index) => <motion.span
                    initial = {{y:"100%"}} 
                    animate = {cards[3]}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                    key={index} 
                    className='inline-block translate-y-full'>
                        {item}</motion.span>)}</h1>

                    <div className='background w-full h-full bg-purple-300 flex justify-center items-center rounded-lg'>
                    
                        <div className='main-img w-1/2 h-1/2 flex items-center justify-center bg-purple-400'>
                            <img src="project/has.png" alt="img" />
                        </div>

                    </div>
                </motion.div>

                <div className='w-full flex gap-3'>
                    {['React', 'Javascript', 'CSS'].map((item, index) =>(
                        <button key={index} className='border-black border-2 px-5 rounded-full uppercase font-regularNeue'>{item}</button>
                    ))}
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center mt-12 pb-20'>
            <div className='flex items-center'>
                <button className='font-regularNeue text-whitee bg-[#020202] px-6 h-14 rounded-full flex items-center justify-center gap-8'>VIEW ALL PROJECTS <div className='w-2 h-2 bg-whitee rounded-full'></div></button>
            </div>
        </div>
    </div>
    )
}

export default Projects