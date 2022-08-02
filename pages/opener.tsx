import { motion } from 'framer-motion'
import {} from 'react-icons/fi'

import 'animate.css'
import Socials from '../components/socials'

function Opener() {
  return (
    <>
      <main className=" md:w- flex w-full max-w-8xl flex-1   flex-col  pr-56 pt-24 md:static  ">
        <div className=" effect left-20 pt-40 font-sans font-bold text-gray-300 md:left-56 md:pt-80  ">
          <span className=" pt-26  justify-left block text-lg font-semibold text-pink-800 md:text-lg">
            Hey I'm
          </span>
          <span className="text-4xl md:text-7xl">Siddharth Srinivasan.</span>
          <span className="effects block font-sans text-4xl font-bold text-gray-400 md:text-7xl">
            I do stuff on the web.
          </span>
        </div>
        <div className="pt-4 pl-20 md:pl-56">
          <button className=" animate__animated animate__fadeInLeft animate__delay-3s halal flex w-48 border border-pink-800 bg-transparent py-4 px-4 font-cool  text-3xl  font-bold italic text-pink-800 hover:border-transparent lg:w-96">
            Reach Out
          </button>
        </div>
      </main>

      <div className="pt-26 flex w-full items-end justify-end  pt-96 pr-20  ">
        <Socials />
      </div>
    </>
  )
}

export default Opener
