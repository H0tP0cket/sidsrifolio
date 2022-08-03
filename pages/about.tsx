import { useAnimation, motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {} from 'react-icons/fi'
import Image from 'next/image'
import halal from '../public/images/evenmorehalalmodeme.png'
import 'animate.css'
import ColoredLine from '../components/linewithcolor'
import { useEffect } from 'react'

function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const slideInLeft = useAnimation()
  useEffect(() => {
    if (inView) {
      slideInLeft.start({
        x: 0,
        transition: { type: 'spring', duration: 1.2, bounce: 0.1 },
      })
    }
    if (!inView) {
      slideInLeft.start({ x: '-50vw' })
    }
  }, [inView])

  const slideInRight = useAnimation()
  useEffect(() => {
    if (inView) {
      slideInRight.start({
        x: 0,
        transition: { type: 'spring', duration: 1.2, bounce: 0.1 },
      })
    }
    if (!inView) {
      slideInRight.start({ x: '50vw' })
    }
  }, [inView])
  return (
    <div className="  responsive min-h-screen flex-col items-center justify-center bg-gray-900 py-2 ">
      <section className="relative">
        <div className="  ">
          <div className="max-w-5xl pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="overflow-y-hidden pb-12 text-center md:pb-16">
              <h1 className=" mb-4   overflow-y-hidden text-4xl font-extrabold  tracking-tighter md:text-5xl">
                <span className="  text-gray-350">About me</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2" ref={ref}>
              <motion.div animate={slideInLeft}>
                <p className="flex  rounded-tl-2xl border-t-4 border-l-4  border-pink-800  px-24 pt-8  pl-8 text-lg text-gray-350 transition transition-all delay-150 ease-in-out hover:pt-4 hover:pl-4 md:px-8">
                  Hey! My Name is Sid and I'm an aspiring web developer. I have
                  always been interested in computers and technology, and I have
                  been honing my skills in web development for some time now. I
                  am passionate about creating beautiful and user-friendly
                  websites, and I am always striving to learn new techniques and
                  stay up-to-date with the latest web technologies.
                </p>
              </motion.div>
              <motion.div
                // className="overlayed flex items-center justify-center  rounded-br-2xl  border-b-4 border-r-4 border-pink-800 pb-8 transition delay-150 ease-in-out hover:pb-4 hover:transition-all"
                animate={slideInRight}
                className="mx-auto pl-16"
              >
                <img
                  src="/images/evenmorehalalmodeme.png"
                  className="hover: flex rounded-br-2xl border-b-4 border-r-4  border-pink-800  pb-8 pr-8  text-white transition transition-all delay-150 ease-in-out hover:pb-4 hover:pr-4"
                  width="320"
                  height="368"
                ></img>
                {/* <Image
                  src={halal}
                  className="  overlayed hover:opacity-100 hover:blur-none"
                  width="320"
                  height="368"
                /> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
