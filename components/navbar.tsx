import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { useEffect } from 'react';
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
  <div className={`fixed top-0 w-full h-20  md:bg-opacity-90 transition duration-300 ease-in-out bg-gray-700 ${!top && 'bg-gray-800 backdrop-blur shadow-lg'}`}>
    
    <a href="#home" className="text-xl mr-12 text-teal-400 items-center opacity-100 justify-center hover:text-white transition duration-300 cursor-pointer">Home</a>
    <a href="#news" className="text-xl mr-12 text-teal-400 items-center opacity-100 justify-center hover:text-white transition duration-300 cursor-pointer">News</a>
    <a href="#contact" className="text-xl mr-12m text-teal-400 items-center opacity-100 justify-center hover:text-white transition duration-300 cursor-pointer">Contact</a>
    </div>
  
  )
}

export default Navbar;