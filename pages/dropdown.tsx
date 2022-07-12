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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 py-2">

      
      

    
      <Navbar />
      <main className=" w-full flex-1  px-16 pt-24 ">
        <nav className = "text-8xl text-white ">
            <a href = "#" className = "block pb-8 z-80 ">HOME</a>
            <a href = "#"className = "block pb-8">ABOUT</a>
            <a href = "#"className = "block pb-8">PROJECTS</a>
            <a href = "#"className = "block pb-8">CONTACT</a>
        </nav>
      </main>

      
      
      <Footer/>
    </div> 
    
    
  
    
)
}

export default Home
