import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/sanity'

type Props = {
 skill: Skill;
 directionLeft?: boolean;
}



export default function Skill({skill, directionLeft}: Props) {
  return (
    <div>
        <motion.div
        initial={{
            x: directionLeft ?  -200 : 200,
        }}
        transition={{duration: 1}}
        whileInView={{ opacity: 1, x: 0}}
         className='group relative flex cursor-pointer'>
            <Image className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
            filter group-hover:grayscale transition duration-300 z-0'
             src={urlFor(skill?.image).url()} width={100} height={100} alt='logos'/>

        </motion.div>

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 '>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skill.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}