import React from 'react'

function About() {
  return (
    <div className=' w-full px-20 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className=' font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-light'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell products, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className=' w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562]'>
            <div className=' w-1/2'>
                <h1 className=' text-6xl'>Our approach:</h1>
                <button className='flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className=' w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#9bae5d] rounded-3xl">

            </div>
        </div>
    </div>
  )
}

export default About