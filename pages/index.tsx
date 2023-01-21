import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll
    z-0 overflow-y-scroll overflow-x-hidden'>
      <Head>
        <title>Joshua</title>
        <meta name="description" content="Joshua's Portfolio" />
      </Head>
  
      <Header/>

       {/* hero */}
       <section id='hero' className='snap-start'>
        <Hero/>
       </section>
       {/* about */}
       <section id='about' className='snap-center'>
        <About/>
       </section>

       {/* experience */}
       <section id='experience' className='snap-center'>
        <WorkExperience/>
       </section>

       {/* skills */}
        <section id='skills' className='snap-start'>
        <Skills/>
        </section>
       {/* projects */}
       <section id='projects' className='snap-center'>
        <Projects/>
        </section>
       {/* contact */}
       <section id='contact' className='snap-start'>
        <ContactMe/>
       </section>
    
    </div>
  )
}
