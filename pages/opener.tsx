import { motion } from 'framer-motion'
import {} from 'react-icons/fi'

import 'animate.css'
import Socials from '../components/socials'

function Opener() {
  return (
    <>
      <main className="flex w-full max-w-8xl flex-1  flex-col px-16 pt-24">
        <div className=" effect left-56 pt-80 font-mono font-bold text-gray-300  ">
          <span className=" pt-26  justify-left block text-lg font-semibold text-pink-800">
            Hey I'm
          </span>
          Siddharth Srinivasan.
          <span className="effects block  font-mono font-bold text-gray-400">
            I do stuff on the web.
          </span>
        </div>
      </main>
      <div className="flex w-full items-end justify-end  pr-20  ">
        <Socials />
      </div>
    </>
  )
}

export default Opener
