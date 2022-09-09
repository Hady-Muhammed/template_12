import React from 'react'
import LuxCard from './LuxCard'

const Luxury = () => {
  return (
    <div>
      <div className="max-w-[1040px] mx-auto text-center mt-24 mb-24">
        <h1 className="font-bold text-5xl">Luxury Selection</h1>
        <p className="bg-[rgba(173,199,255,0.502)] mt-8 w-fit mx-auto p-3">
          <p className="font-bold text-slate-700 text-xl mt-[-1.7rem]">
            Select from the top luxury vehicles to roll in style
          </p>
        </p>
      </div>
      <div className='flex xs:flex-col md:flex-row xs:space-x-0 md:space-x-4 xs:space-y-4 md:space-y-0 max-w-[1040px] mx-auto'>
      <LuxCard image='https://www.ebesucher.com/content/images/automobile/lykanhypersport.jpg' make='Lykan HyperSport'/>
      <LuxCard image='https://wheelz.me/wp-content/uploads/2016/01/160050-car_Ferrari-F60-America.jpg' make='Ferrari f60'/>
      <LuxCard image='https://i.pinimg.com/originals/90/2c/e6/902ce663eabb1d31086ab699a83a0cab.jpg' make='Maybecho Exelero'/>
      <LuxCard image='https://i.pinimg.com/originals/27/44/1c/27441cfd5a1fa42cda540545a48f46f3.jpg' make='Bugatti Veyron'/>
      </div>
    </div>
  )
}

export default Luxury