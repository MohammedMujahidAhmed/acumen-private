// import React, { useEffect } from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter'
import '../styles/HeroSection.css'
import { Link } from 'react-router-dom';
import jarvisbg from '../images/jarvisbg.gif'

const HeroSection = () => {
    const [text ] = useTypewriter({
        words:['Excitement!','Innovation!' , 'Adventure!'],
        loop :{},
    });
    console.log(text);

  return (
    <section className='flex flex-col text-white p-8 h-screen items-center justify-center space-y-10 overflow-hidden'>
        <div className='flex flex-col text-white h-[90%] items-center justify-between space-y-10 overflow-hidden overflow-x-hidden relative z-20'>

            <section className='z-20'>
                <h3 className='text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-center brightness-200'>Vasavi College Of Engineering(A),Hyderabad</h3>
                <p className='font-bold text-center  brightness-125'>Presents</p>
            </section>
            <h1 className='blink-text text-[45px] sm:text-[80px] md:text-[90px] lg:text-[120px] z-20'>Acumen</h1>
            <h4 className='uppercase text-2xl text-center pt-4 font-bold z-20'>csefest'24</h4>
            <p className='text-center  brightness-150 text-xl z-20'>
                Dive into the Fest: Where Every Moment Sparks&nbsp;
                <span className='text-blue-900 font-semibold brightness-200 z-20'>
                    {text}
                </span>
                <Cursor/>
            </p>
            <div className='flex justify-center items-center z-20'>
                <Link to='/events' className='button-86 z-20'>Explore Events</Link>
            </div>
            <img className='absolute top-8 md:top-2 z-10 blur-[1px] md:blur-[1px] backdrop-blur-sm w-[300px] md:w-fit' src={jarvisbg} alt='arcreactor' loading="lazy" ></img>
        </div>
        <div className='star star1 overflow-hidden'></div>
        <div className='star star2 overflow-hidden'></div>
        <div className='star star3 overflow-hidden'></div>
        <div className='star star4 overflow-hidden'></div>
        <div className='star star5 overflow-hidden'></div>
        <div className='star star6 overflow-hidden'></div>
        <div className='star star7 overflow-hidden'></div>
        <div className='star star8 overflow-hidden'></div>
    </section>
  )
}

export default HeroSection