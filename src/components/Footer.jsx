import React from 'react'
import icon from '../images/logo_dark.png'
const Footer = () => {
  return (
    <footer className='bg-black flex justify-between mt-40 px-14 p-5'>
        <img className='' src={icon} alt=""/>
        <button className='bg-violet-900 text-white px-10 py-5 rounded-md'>Share A Car</button>
    </footer>
  )
}

export default Footer