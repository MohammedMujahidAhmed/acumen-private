// import React, { useEffect } from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter'
import '../styles/HeroSection.css'
import { Link } from 'react-router-dom';
import jarvisbg from '../images/jarvisbg.gif'
import vlogo from '../images/vlogo.png'

const HeroSection = () => {
    const [text ] = useTypewriter({
        words:['Excitement!','Innovation!' , 'Adventure!'],
        loop :{},
    });
    console.log(text);

  return (
    <section className='flex flex-col text-white p-6 h-screen items-center space-y-10 overflow-hidden'>
        <div className='flex flex-col text-white min-h-[90%] items-center justify-between space-y-10 overflow-hidden overflow-x-hidden relative z-20'>

            <section className='z-20 p-2'>
                <div className='flex flex-col md:flex-row items-center'>
                    <img src={vlogo} alt='college-logo' className='w-[70px] md:w-[100px]'></img>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-blue-900 font-bold text-xl sm:text-2xl md:text-5xl lg:text-5xl text-center brightness-200'>Vasavi College Of Engineering(A)</h3>
                        <p className='text-blue-900 font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl text-center brightness-200'>Hyderabad</p>
                    </div>
                </div>
                <p className='font-bold text-center text-xl brightness-125'>Presents</p>
            </section>
            <h1 className='blink-text text-[45px] sm:text-[80px] md:text-[90px] lg:text-[120px] z-20'>Acumen</h1>
            <h4 className='uppercase text-2xl md:text-4xl text-center pt-4 font-bold z-20'>csfest'24</h4>
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