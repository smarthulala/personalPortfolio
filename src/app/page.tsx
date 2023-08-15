import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
