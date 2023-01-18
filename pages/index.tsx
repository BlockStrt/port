import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua</title>
        <meta name="description" content="Joshua's Portfolio" />
      </Head>
  
      <Header/>

       {/* hero */}
       <section id='hero'>
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
