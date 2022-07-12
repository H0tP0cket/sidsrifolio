import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../components/navbar'
import PacmanLoader from 'react-spinners/PacmanLoader'
import React, {useState, useEffect} from 'react';
import 'animate.css';
import Footer from '../components/footer'


const Home: NextPage = () => {
  
  const [loading, isLoading] = useState(false);

    useEffect(() => {
        isLoading(true);
        setTimeout(() => {
            isLoading(false);
        }, 1000)
    }, 
    [])
  
    
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 py-2 ">

      <Head>
        <title>Siddharth Srinivasan </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/along-sans-medium-regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      { loading ? (
        <>
        <div className = "pb-12">
      <PacmanLoader color={"#08fdd8"} loading={loading}  size={100} />
      </div>
      <div className="text-4xl font-bold text-teal-400 pt-20 pl-16">
          
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
      <main className="flex w-full flex-1 flex-col  px-16 pt-24">
        
      </main>

      <Footer/>
      </>
)}
    </div> 
    
  
    
)
}

export default Home
