import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'

import Link from 'next/link'
import Slogo from '../public/halalimage.png'
import Image from 'next/image'
import { motion } from 'framer-motion'



function Navbar() {
  const [top, setTop] = useState(true)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 14 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])
  return (
    <nav
      className={` fixed top-0 z-10 flex h-24 w-full items-center   transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top && 'bg-gray-850 shadow-lg backdrop-blur'
      }`}
    >
      <div className="relative flex w-full justify-between">
        {/* <div className="w-full flex-grow flex-row justify-between md:w-auto mr-4"> !!!!!! mr-4 */}
        {/* Logo */}
        <Link href="/">
          <a className="block pl-8" aria-label="">
            <Image src={Slogo} width="96px" height="68px" alt="Logo" />
          </a>
        </Link>
        
        <button
          onClick={() => setOpen(!open)}
          className="leading-none focus:outline-none pr-20 "
          aria-label="Navbar Toggle"
        >
          <svg
           
            className={
              'text-pink-900 ' +
              (open
                ? ' hidden'
                : ' animate__animated animate__lightSpeedInLeft animate__faster')
            }
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
                className={
                  "text-pink-900    " +
                  (!open
                    ? " hidden"
                    : " animate__animated animate__lightSpeedInRight animate__faster ")
                }
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar
