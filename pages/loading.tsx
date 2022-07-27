import {} from 'react-icons/fi'

import { Typewriter } from 'react-simple-typewriter'

import PacmanLoader from 'react-spinners/PacmanLoader'
import React, { useState, useEffect } from 'react'
import 'animate.css'

import 'animate.css'

function Loader() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
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
  )
}

export default Loader
