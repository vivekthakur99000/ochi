import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' w-full h-screen bg-zinc-900 p-1'>
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item,index) => {
          return  <div className='masker'>
            <div className="w-fit flex items-center">
             {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1 }} className='w-[8vw] h-[5vw] bg-red-500'></motion.div>)}
            <h1 className=' uppercase text-[8vw] leading-[6vw] tracking-tighter font-["Founders_Grotesk_X-Condensed"] font-bold'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className=" border-t border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For public and private companies", 
            "From the first pitch to IPO",].map((item, index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
        <div className="start flex items-center gap-5">
        <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full">Start the Project</div>
        <div className="w-10 h-10 flex items-center justify-center  border-[2px] border-zinc-500 rounded-full">
          <span className='  rotate-[45deg]'>
          <FaArrowUpLong />
          </span>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default LandingPage