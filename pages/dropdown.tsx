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

      
      

    
      <Navbar />
      <main className="flex w-full flex-1 flex-col  px-16 pt-24">
        <nav className = "text-4xl text-white ">
            <a href = "#">HOME</a>
            <a href = "#">ABOUT</a>
            <a href = "#">PROJECTS</a>
            <a href = "#">CONTACT</a>
        </nav>
      </main>

      <Footer/>
      

    </div> 
    
  
    
)
}

export default Home
