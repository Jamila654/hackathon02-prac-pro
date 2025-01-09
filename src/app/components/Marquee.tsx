import React from 'react'

export default function Marquee() {
  return (
    <div className=' w-full h-10 text-nowrap bg-black text-white text-[8px] sm:text-sm md:text-md flex items-center justify-around'>
      <h1 className=''>Summer Sale For All Swim Suits And Express Delivery - OFF 50% <span className=' font-bold underline'>ShopNow</span></h1>
      <h1 className='hidden sm:flex text-white font-bold'><select title='list' name="lang" id="" className=' bg-black  rounded-md'>
        <option value="">English</option></select></h1>
    </div>
  )
}