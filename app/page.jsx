import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-[#111010] via-amber-700 to-[#ddb120]">
    <div className='container mx-auto px-12 py-4'>
      <Navbar />
    < HeroSection />
    <About />
    <Projects />
    <Contact />
   
    </div>
    </main>
  )
}
