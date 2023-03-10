import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '@/typings'

type Props = {
  pageInfo: PageInfo
}
const img = 'https://cdn.sanity.io/images/7fnjll7q/production/1dfbc6a7078ac710aa88b2fdec65e2c1d5721a12-1024x1024.jpg'

function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 5.2,
    }}
     className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className=' absolute top-24 upppercase tracking-[20px] text-gray-500 text-2xl'>
        About
        </h3>
        <motion.div
        initial={{
          x:-200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{once: true}}
        className=' -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64
        md:h-95 xl:w-[500px] xl:h-[600px]'
        >
        <Image src={img} alt='image' width={500} height={500}/>
        </motion.div>

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>  Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>  background
          </h4>
          <p className='text-base'>{pageInfo?.backgroundInformation}</p>
        </div>

        </motion.div>
  )
}

export default About