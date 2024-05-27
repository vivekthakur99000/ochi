import { motion } from 'framer-motion'
import React from 'react'

function Marqee() {
  motion
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className=' text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase -mb-1 pt-10 font-semibold'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className=' text-[15vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase -mb-1 pt-10 font-semibold'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marqee