import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch , AiOutlineUser } from "react-icons/ai";
import logo from "../images/logo.png";
const Header = () => {
  const [icon, setIcon] = useState(false);
  const handleMenu = () => setIcon((prev) => !prev);
  return (
    <header className="flex justify-between p-5 w-[90%] mx-auto items-center relative">
      <img className="cursor-pointer" src={logo} alt="logo" />
      <button className="xs:block lg:hidden" onClick={handleMenu}>
        {icon ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
      <ul className="space-x-8 xs:hidden lg:flex">
        <li className="cursor-pointer font-semibold">Learn More</li>
        <li className="cursor-pointer font-semibold">Log in</li>
        <li className="cursor-pointer font-semibold">Sign up</li>
        <li className="cursor-pointer grid place-items-center"><AiOutlineSearch size={25}/></li>
        <li className="cursor-pointer grid place-items-center"><AiOutlineUser size={25}/></li>
      </ul>
      <ul className={`${icon ? 'opacity-[1]' : 'opacity-[0] pointer-events-none'} p-5 bg-white duration-500 flex fixed w-[20%] flex-col space-y-4 right-[15%] top-[8%] text-center`}>
        <li className="hover:scale-110 cursor-pointer duration-300 p-2 border-b font-semibold text-center">Learn More</li>
        <li className="hover:scale-110 cursor-pointer duration-300 p-2 border-b font-semibold">Log in</li>
        <li className="hover:scale-110 cursor-pointer duration-300 p-2 border-b font-semibold">Sign up</li>
        <li className="hover:scale-110 cursor-pointer duration-300 p-2 border-b grid place-items-center"><AiOutlineSearch size={25}/></li>
        <li className="hover:scale-110 cursor-pointer duration-300 p-2 border-b grid place-items-center"><AiOutlineUser size={25}/></li>
      </ul>
   
    </header>
  );
};

export default Header;
