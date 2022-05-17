import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { useEffect } from 'react';
import * as Logo  from 'public/SLogo.png';
function Navbar() {
  
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
  return(
  <div className={` mt-30 flex items-center fixed top-0 w-full h-24  md:bg-opacity-90 transition duration-300 ease-in-out bg-gray-900 ${!top && 'bg-gray-850 backdrop-blur shadow-lg'}`}>
    <a className="block" aria-label="Logo"><img src='public/Slogo1.png' width='40px' alt="Siddharth Logo" /></a>
    <a href="#based"  className="text-l  ml-24 text-teal-400 items-center opacity-100 justify-center hover:text-white transition duration-300 ease-in-out cursor-pointer">About</a>
    <a href="#superbased" className="text-l ml-12  text-teal-400 items-center opacity-100 justify-center hover:text-white transition duration-300 ease-in-out cursor-pointer">Skills</a>
    <a href="#extrabased" className="text-l ml-12  text-teal-400 items-center opacity-100 justify-center hover:text-white transition duration-300  ease-in-out cursor-pointer">Experience</a>
    <a href="#extremelybased" className="text-l ml-12  text-teal-400 items-center opacity-100 justify-center hover:text-white transition duration-300 ease-in-out cursor-pointer">Contact</a>
    </div>
  
  )
}

export default Navbar;