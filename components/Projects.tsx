import React from 'react'
import Image from 'next/image'

type Props = {}
const mockup ='https://cdn.sanity.io/images/74w6p0rn/production/2109cfb0a6017913286ea3e2cde72501c4989ec6-4000x2500.jpg'

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
            z-20 '>
                {projects.map((project) => (
                    <div key={project} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                    justify-center p-20 md:p-44 h-screen'>
                        <Image src={mockup} width={100} height={100} alt='project'/>

                        <div>
                            <h4>Case Study 1 of 3: UPS Clone</h4>
                        </div>
                    </div>
                ))}
               
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 '/> 
    </div>
  )
}