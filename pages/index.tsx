import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../components/navbar'
import PacmanLoader from 'react-spinners/PacmanLoader'
import React, { useState, useEffect } from 'react'
import 'animate.css'
import Footer from '../components/footer'
import { motion } from 'framer-motion'

import Socials from '../components/socials'

function Home() {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, [])
  useEffect(() => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 py-2 ">
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
          <div className=" pb-12">
            <PacmanLoader color={'#FF006F'} loading={loading} size={100} />
          </div>
          <div className="pt-20 pl-16 text-4xl font-bold text-pink-800">
            <Typewriter
              words={['loading...']}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <main className="flex w-full max-w-8xl flex-1  flex-col px-16 pt-24">
            <div className=" effect left-56 pt-80 font-mono font-bold text-gray-300  ">
              <span className=" pt-26  justify-left block text-lg font-semibold text-pink-800">
                Hey I'm
              </span>{' '}
              Siddharth Srinivasan.
              <span
                className={
                  !visible
                    ? 'effects block  font-mono font-bold text-gray-400'
                    : ''
                }
              >
                I do stuff on the web.
              </span>
            </div>
          </main>
          <div className="flex w-full items-end justify-end  pr-20 ">
            <Socials />
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Home
