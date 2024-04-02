import React from 'react'
import '../App.css';
import OurTheme from '../components/OurTheme'
import OurTeam from '../components/OurTeam'
import Mentors from '../components/Mentors'
import Sponsers from '../components/Sponsers'
import About from '../components/About'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <main className="bg-zinc-800 min-h-screen App">
      <section className='max-w-[1200px] m-auto'>
        <HeroSection/>
        <About/>
        <OurTheme/>
        <Sponsers/>
        <Mentors/>
        <OurTeam/>
      </section>
    </main>
  )
}

export default Home