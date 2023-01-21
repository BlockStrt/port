import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import face from '../public/face.JPG'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}
const face = 'https://cdn.sanity.io/images/74w6p0rn/production/0a42dc30669eeb70ba6785605690b218c2acf923-1024x1024.jpg'

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
      <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={face} width={100} height={100} alt='image'
      />
      <div className='z-20'>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
      <h1>
      <span className='text-5xl lg:text-6xl font-semibold px-10'>{text}</span>
      <Cursor cursorColor='#F7AB0A'/>
      </h1>
      <div className='pt-5'>
        <Link  href='#about'>
        <button className='heroButton'>About</button>
        </Link>
        <Link href='#experience'>
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href='#skills'>
        <button className='heroButton'>Skills</button>
        </Link>
        <Link href='#projects'>
        <button className='heroButton'>Projects</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Hero