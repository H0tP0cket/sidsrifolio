import { useAnimation, motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {} from 'react-icons/fi'
import Image from 'next/Image'
import halal from '../public/images/evenmorehalalmodeme.png'
import 'animate.css'
import ColoredLine from '../components/linewithcolor'

function About() {
  const myVariants: Variants = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 50,

      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }
  return (
    <div className="  responsive min-h-screen flex-col items-center justify-center bg-gray-900 py-2 ">
      <section className="relative">
        <div className="mx-auto px-4 sm:px-6 ">
          <div className="max-w-5xl pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="pb-12 text-center md:pb-16">
              <h1 className="mb-4  overflow-y-hidden text-4xl font-extrabold leading-tighter  tracking-tighter md:text-7xl">
                <span className="  text-pink-800">About me</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={myVariants}
                className="  pt-16  text-lg text-gray-400  "
              >
                <p className=" hover: rounded-tl-2xl border-t-4 border-l-4  border-pink-800  pt-8 pl-8 font-mono transition transition-all delay-150 ease-in-out hover:pt-4 hover:pl-4">
                  Hey! My name is Sid and I have a passion for web development.
                  I have always been interested in computers and technology, and
                  I have been honing my skills in web development for some time
                  now. I am passionate about creating beautiful and
                  user-friendly websites, and I am always striving to learn new
                  techniques and stay up-to-date with the latest web
                  technologies.
                </p>

                <p></p>

                <p></p>
              </motion.div>
              <motion.div className=" flex items-center justify-center overflow-x-hidden rounded-br-2xl  border-b-4 border-r-4 border-pink-800 pb-8 transition delay-150 ease-in-out hover:pb-4 hover:transition-all">
                <Image
                  src={halal}
                  className="  opacity-60  blur drop-shadow-lg hover:opacity-100 hover:blur-none"
                  width="320"
                  height="368"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
