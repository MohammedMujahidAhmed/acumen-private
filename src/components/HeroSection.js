// import React, { useEffect } from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter'
import '../styles/HeroSection.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [text ] = useTypewriter({
        words:['Excitement!','Innovation!' , 'Adventure!'],
        loop :{},
    });
    console.log(text);

  return (
    <section className='flex flex-col text-white p-8 h-screen items-center justify-center space-y-10'>
        <div className='flex flex-col text-white h-[90%] items-center justify-between space-y-10'>

            <section>
                <h3 className='text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl text-center brightness-200'>Vasavi College Of Engineering(A),Hyderabad</h3>
                <p className='font-bold text-center  brightness-125'>Presents</p>
            </section>
            <h1 className='blink-text text-[45px] sm:text-[80px] md:text-[90px] lg:text-[120px]'>Acumen</h1>
            <h4 className='uppercase text-2xl text-center pt-4 font-bold'>csefest'24</h4>
            <p className='text-center  brightness-150 text-xl'>
                Dive into the Fest: Where Every Moment Sparks&nbsp;
                <span className='text-blue-900 font-semibold brightness-200 '>
                    {text}
                </span>
                <Cursor/>
            </p>
            <div className='flex justify-center items-center'>
                <Link to='/events' >Explore Events</Link>
            </div>
        </div>
    </section>
  )
}

export default HeroSection