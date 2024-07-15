import { motion } from 'framer-motion'
import React from 'react'

function Marquee(props) {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1.5" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-dark_green'>
        <div className='text text-whitee border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap font-mediumNeue font-black uppercase overflow-hidden'>
            <motion.h1 initial = {{x:"0"}} animate = {{x:"-100%"}} transition={{repeat: Infinity, ease: 'linear', duration: 5}} className='text-[17vw] leading-none pb-2 pr-10'>{props.text}</motion.h1>
            <motion.h1 initial = {{x:"0"}} animate = {{x:"-100%"}} transition={{repeat: Infinity, ease: 'linear', duration: 5}} className='text-[17vw] leading-none pb-2 pr-10'>{props.text}</motion.h1>
            <motion.h1 initial = {{x:"0"}} animate = {{x:"-100%"}} transition={{repeat: Infinity, ease: 'linear', duration: 5}} className='text-[17vw] leading-none pb-2 pr-10'>{props.text}</motion.h1>
        </div>
    </div>
  )
}

export default Marquee