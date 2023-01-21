import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}
const mirrorman = 'https://cdn.sanity.io/images/74w6p0rn/production/6ede803103f3d9791389a347f9b430ae44ba1e61-1024x1024.jpg'

function ExperienceCard({}: Props) {
  return (
    <article>
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
       viewport={{once: true}}
        className=''>
        <Image className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ' 
        src={mirrorman} width={100} height={100} />
       </motion.div>
    </article>
  )
}

export default ExperienceCard