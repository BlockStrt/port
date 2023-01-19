import React from 'react'
import Image from 'next/image'
// import face from '../public/face.JPG'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            'Hey, My name is Josh', 
            'Guy-who-loves-Coffee.tsx', 
            '<ButLovesToCodeMore />'
        ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>
      <Image className='relative  rounded-full h-32 w-32 mx-auto object-cover' src='/face.JPG' width={100} height={100} alt='image'
      />
      <div>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
      <h1>
      <span className='text-5xl lg:text-6xl font-semibold px-10'>{text}</span>
      <Cursor cursorColor='#F7AB0A'/>
      </h1>
      <div>
        <button className='heroButton'>About</button>
        <button className='heroButton'>Experience</button>
        <button className='heroButton'>Skills</button>
        <button className='heroButton'>Projects</button>
      </div>
    </div>
    </div>
  )
}

export default Hero