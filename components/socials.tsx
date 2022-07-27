import { motion } from 'framer-motion'
import { FiTwitter, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'
import Footer from './footer'
import Navbar from './navbar'
import 'animate.css'

function Socials() {
  return (
    <main className=" animate__animated animate__fadeInRight animate__delay-3s fixed overflow-y-hidden text-pink-800">
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <FiTwitter className="mr-2 h-7 w-7 pb-2 hover:text-white" />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <FiInstagram className="mr-2 h-7 w-7 pb-2 hover:text-white" />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <FiGithub className="mr-2 h-7 w-7 pb-2 hover:text-white" />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        <FiLinkedin className="mr-2 h-7 w-7 pb-2 hover:text-white " />
      </motion.div>
    </main>
  )
}

export default Socials
