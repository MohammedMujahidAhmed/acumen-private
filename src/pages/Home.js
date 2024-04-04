import React, { useEffect, useState } from 'react'
import '../App.css';
import OurTheme from '../components/OurTheme'
import OurTeam from '../components/OurTeam'
import Mentors from '../components/Mentors'
import Sponsers from '../components/Sponsers'
import About from '../components/About'
import HeroSection from '../components/HeroSection'
import Preloader from '../components/Preloader';
import Footer from '../components/Footer';

const Home = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []); 
  if (!pageLoaded) {
    return <Preloader />;
  }

  return (
    <main className="bg-black min-h-screen App">
      <section className='max-w-[1200px] m-auto'>
        <HeroSection/>
        <About/>
        <OurTheme/>
        <Sponsers/>
        <Mentors/>
        <OurTeam/>
        <Footer/>
      </section>
    </main>
  )
}

export default Home