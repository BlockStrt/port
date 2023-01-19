import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll
    z-0'>
      <Head>
        <title>Joshua</title>
        <meta name="description" content="Joshua's Portfolio" />
      </Head>
  
      <Header/>

       {/* hero */}
       <section id='hero' className='snap-center'>
        <Hero/>
       </section>
       {/* about */}

       {/* experience */}

       {/* skills */}

       {/* projects */}

       {/* contact */}
    
    </div>
  )
}
