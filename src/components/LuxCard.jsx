import React from 'react'

const LuxCard = ({image , make}) => {
  return (
    <div className='xs:w-[100%] md:w-[25%] border-[1px] border-black rounded-2xl text-center'>
        <img className='w-full object-cover h-[200px] rounded-2xl' src={image} alt={make} />
        <p className='font-semibold'>{make}</p>
    </div>
  )
}

export default LuxCard