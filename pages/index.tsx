import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 py-2 ">
      <Head>
        <title>Siddharth Srinivasan </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col  pt-16 px-16">
        <div className="text-4xl font-bold text-teal-400">
          <Typewriter words={["Hey I'm Sid Sri", "A Web Developer"]}
            loop={10000}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000} />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center pl-16 text-white">
        <hr/>
        <div>
          Copyright ©2022{' '}
          <a href="https://github.com/H0tP0cket">Siddharth Srinivasan'22</a> All
          Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default Home
