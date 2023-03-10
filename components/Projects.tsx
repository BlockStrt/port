import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/typings'

import { urlFor } from '@/sanity'

type Props = {
    projects: Project[];
}
const mockup ='https://cdn.sanity.io/images/74w6p0rn/production/2109cfb0a6017913286ea3e2cde72501c4989ec6-4000x2500.jpg'

export default function Projects({ projects }: Props) {

  return (
    
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
            z-20 scrollbar scrollbar-track-yellow-300/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (
                    <motion.div
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{ opacity: 1, y:0,}}
                    viewport={{once: true}}
                     key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                    justify-center p-20 md:p-44 h-screen'>
                        <Image src={urlFor(project?.image).url()} width={400} height={400} alt='project'/>

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl' >
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span> {" "}
                            {project.title}
                            </h4>
                          

                            <p className='text-lg text-center'>
                            {project.summary}
                            </p>
                        </div>
                    </motion.div>
                ))}
               
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 '/> 
    </div>
  )
}