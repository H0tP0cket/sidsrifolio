import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'
import * as Logo from 'public/SLogo.png'
function Navbar() {
  const [top, setTop] = useState(true)
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])
  return (
    <div
      className={` mt-30 fixed top-0 flex h-24 w-full items-center  bg-gray-900 transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top && 'bg-gray-850 shadow-lg backdrop-blur'
      }`}
    >
      <a className="block" aria-label="Logo">
        <img src="public/Slogo1.png" width="40px" alt="Siddharth Logo" />
      </a>
      <a
        href="#based"
        className="text-l  ml-24 cursor-pointer items-center justify-center text-teal-400 opacity-100 transition duration-300 ease-in-out hover:text-white"
      >
        About
      </a>
      <a
        href="#superbased"
        className="text-l ml-12  cursor-pointer items-center justify-center text-teal-400 opacity-100 transition duration-300 ease-in-out hover:text-white"
      >
        Skills
      </a>
      <a
        href="#extrabased"
        className="text-l ml-12  cursor-pointer items-center justify-center text-teal-400 opacity-100 transition duration-300  ease-in-out hover:text-white"
      >
        Experience
      </a>
      <a
        href="#extremelybased"
        className="text-l ml-12  cursor-pointer items-center justify-center text-teal-400 opacity-100 transition duration-300 ease-in-out hover:text-white"
      >
        Contact
      </a>
    </div>
  )
}

export default Navbar
