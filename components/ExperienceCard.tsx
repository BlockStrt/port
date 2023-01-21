import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}
const mirrorman = 'https://cdn.sanity.io/images/74w6p0rn/production/6ede803103f3d9791389a347f9b430ae44ba1e61-1024x1024.jpg'
const anniversary = 'https://cdn.sanity.io/images/74w6p0rn/production/2a446e8bb6b78b0c0678d90d00939fdad59e2d64-2000x2000.jpg'

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
       <motion.div
       initial={{
        y:-100,
        opacity: 0,
       }}
       transition={{
        duration: 1.2
       }}
       whileInView={{
        opacity: 1, y: 0
       }}
    //    viewport={{once: true}}
        className=''>
        <Image className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ' 
        src={mirrorman} width={100} height={100} alt='faces' />
       </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4l font-light'>CEO of Anniversary Group</h4>
            <p className='font-bold text-2xl mt-1'>Anniversary Group</p>
            <div className='flex space-x-2 my-2'>
                <Image className='h-10 w-10 rounded-full'  src={anniversary} width={100} height={100} alt='anni'/>
                <Image className='h-10 w-10 rounded-full' src={anniversary} width={100} height={100} alt='anni'/>
                <Image className='h-10 w-10 rounded-full' src={anniversary} width={100} height={100} alt='anni'/>
             
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Current</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard