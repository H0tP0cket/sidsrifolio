import { motion } from 'framer-motion'
import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'
import Footer from './footer'
import Navbar from './navbar'
import 'animate.css'

function Socials() {
  return (
    <main className=" animate__animated animate__fadeInRight animate__delay-3s fixed z-50  overflow-y-hidden pt-4 text-pink-800">
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <a href="https://github.com/H0tP0cket">
          <FiGithub className="mr-2 h-7 w-7 pb-2 hover:text-white" />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <a href="mailto:sidsrinivasan6@gmail.com">
          <FiMail className="mr-2 h-7 w-7 pb-2 hover:text-white " />
        </a>
      </motion.div>
    </main>
  )
}

export default Socials
