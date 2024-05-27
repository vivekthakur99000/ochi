import React from 'react'

function Cards() {
  return (
    <div className=' w-full h-screen bg-zinc-100 flex gap-5 px-32 items-center'>
        <div className="cardcontainer h-[50vh] w-1/2">
          <div className=' card w-full relative rounded-xl h-full bg-[#004D43] flex justify-center items-center'>
            <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className=' absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2022</button>
          </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
          <div className=' card relative flex justify-center items-center w-full rounded-xl h-full bg-[#273533]'>
          <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className=' absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>RATING 5.0 IN CLUTH</button>
          </div>
          <div className=' card relative flex justify-center items-center w-full rounded-xl h-full bg-[#273533]'>
          <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className=' absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>BUSINESS BOOTCAMP</button>
          </div>
        </div>
    </div>
  )
}

export default Cards