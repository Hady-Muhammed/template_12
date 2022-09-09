import React from 'react'
import drive from '../images/drive.png'
const Driver = () => {
  return (
    <div className='flex xs:flex-col md:flex-row max-w-[1020px] mx-auto items-center mt-20 justify-between px-10'>
        <img className='xs:w-[80%] md:w-[50%]' src={drive} alt="driver" />
        <div className='xs:text-center md:text-left'>
        <h2 className='text-2xl font-bold'>Find your perfect car to <span className='text-violet-900'>try before buy</span></h2>
        <p className='font-semibold'>make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
        <button className='bg-violet-900 text-white px-10 py-5 mt-5 rounded-md'>Browse Cars</button>
        </div>
    </div>
  )
}

export default Driver