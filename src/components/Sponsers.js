import React from 'react'
import tricad from '../images/tricad.png'
import ccc from '../images/ccc.png'
import csi from '../images/csi.png'
import talentsprint from '../images/talentsprint.png'
import ark from '../images/ark.png'
import Marquee from 'react-fast-marquee'
import '../styles/Sponsers.css'



const Sponsers = () => {
  return (
    <section className='flex flex-col justify-center items-center text-white mt-4 p-3 overflow-hidden'>
        <h3 className='text-3xl'>Sponsers</h3>
        <div className='bg-glassy mt-8 p-2 '>
            <Marquee pauseOnHover autoFill >
                <img className='w-[150px] md:w-[350px] mr-10' src={tricad} alt='sponser-img'/>
                <img className='w-[100px] md:w-[150px] mr-10' src={csi} alt='sponser-img'/>
                <img className='w-[100px]  md:w-[150px] mr-10' src={ccc} alt='sponser-img'/>
                <img className='w-[100px]  md:w-[150px] mr-10' src={talentsprint} alt='sponser-img'/>
                <img className='w-[100px] md:w-[150px] mr-10' src={ark} alt='sponser-img'/>
            </Marquee>
        </div>
    </section>
  )
}

export default Sponsers