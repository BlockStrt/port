import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Link from 'next/link'
import Image from 'next/image'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Head from 'next/head'

const anni = 'https://cdn.sanity.io/images/74w6p0rn/production/2a446e8bb6b78b0c0678d90d00939fdad59e2d64-2000x2000.jpg'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-yellow-300/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Joshua</title>
        <meta name="description" content="Joshua's Portfolio" />
      </Head>
  
      <Header/>

  
       <section id='hero' className='snap-start'>
        <Hero/>
       </section>
      
       <section id='about' className='snap-center'>
        <About/>
       </section>

     
       <section id='experience' className='snap-center'>
        <WorkExperience/>
       </section>

      
        <section id='skills' className='snap-start'>
        <Skills/>
        </section>
     
       <section id='projects' className='snap-center'>
        <Projects/>
        </section>
      
       <section id='contact' className='snap-start'>
        <ContactMe/>
       </section>

       <Link href='#hero'>
       <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <Image className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 
          cursor-pointer'
           src={anni} width={100} height={100} alt=''/>
        </div>
        </footer>
        </Link>
    
    </div>

  )
}
