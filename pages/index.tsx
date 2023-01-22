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
import { GetStaticProps, NextPage } from 'next'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { PageInfo, Experience, Skill, Project, Social } from '@/typings'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchExperience } from '@/utils/fetchExperiences'
import { fetchSocials } from '@/utils/fetchSocials'

const anni = 'https://cdn.sanity.io/images/74w6p0rn/production/2a446e8bb6b78b0c0678d90d00939fdad59e2d64-2000x2000.jpg'
type Props ={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-yellow-300/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Joshua</title>
        <meta name="description" content="Joshua's Portfolio" />
      </Head>
  
      <Header socials={socials}/>

  
       <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
       </section>
      
       <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
       </section>

     
       <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
       </section>

      
        <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
        </section>
     
       <section id='projects' className='snap-center'>
        <Projects projects={projects}/>
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

export default Home


export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperience();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return{ 
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
      },
      // Next.js will attempt to re-generate the page:
      // - when a request comes in
      // - at most once every 10 secs
      revalidate: 10,
    }

}