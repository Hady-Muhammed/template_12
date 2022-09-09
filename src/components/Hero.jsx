import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='h-[500px] bg-cover bg-center flex justify-center items-start'>
        <form action="" className='mt-20 bg-white/80 xs:space-y-8 md:space-y-0 xs:divide-x-0 md:divide-x-2 flex xs:flex-col md:flex-row xs:w-[90%] lg:w-[60%] mx-auto shadow-md shadow-black xs:rounded-md md:rounded-full p-5  justify-between items-center px-10'>
          <div className='xs:pl-16 md:pl-6'>
            <label className='font-bold block' htmlFor="">Where</label>
            <input className='border-b border-b-black bg-transparent block outline-none' type="search" placeholder='Search Location'/>
          </div>
          <div className='pl-6'>
            <label className='font-bold block' htmlFor="">From</label>
            <input className='border-b border-b-black bg-transparent block' type="date" />
          </div>
          <div className='pl-6'>
            <label className='font-bold block' htmlFor="">Until</label>
            <input className='border-b border-b-black bg-transparent block' type="date" />
          </div>
           
        
            <AiOutlineSearch className='cursor-pointer' size={30} />
        </form>
    </section>
  )
}

export default Hero