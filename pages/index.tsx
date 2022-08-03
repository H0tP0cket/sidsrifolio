import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../components/navbar'
import PacmanLoader from 'react-spinners/PacmanLoader'
import React, { useState, useEffect } from 'react'
import 'animate.css'
import Footer from '../components/footer'

import Opener from './opener'
import Loader from './loading'
import About from './about'

function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900  ">
      <Head>
        <title>Siddharth Srinivasan </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/public/fonts/Helveticaimage.png.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Navbar />
          <Opener />
          <About />
          <Footer />
        </>
      )}
    </div>
  )
}

export default Home
