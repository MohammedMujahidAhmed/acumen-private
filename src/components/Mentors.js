import React, { useEffect, useState } from 'react'
import hod from '../images/hod.jpeg'
import principal from '../images/principal.jpeg'
import komalkaur from '../images/komalkaur.png'
import nishitha from '../images/nishitha.jpeg'
import Frames from './Frames'
import circles from '../gif/circles.gif'
// import Marquee from 'react-fast-marquee'

const data = [
    {
        imgsrc:hod,
        name:"Dr. Adilakshmi",
        desig:"HOD",
    },
    {
        imgsrc:principal,
        name:"S.V. Ramana",
        desig:"Principal",
    },
    {
        imgsrc:komalkaur,
        name:"Komal Kaur",
        desig:"Faculty",
    },
    {
        imgsrc:nishitha,
        name:"Naishita",
        desig:"Faculty",
    }
]

const Mentors = () => {
    const [index,setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevCount => (prevCount + 1)%data.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

  return (
    <section className='flex flex-col relative gap-5 mt-4 transition ease-in-out justify-center items-center text-white' >
        <h3 className='text-3xl'>Mentors</h3>
        <img src={circles} alt='dot' className='absolute top-0 md:left-[20%] left-[5%]' loading='lazy'/>
        <img src={circles} alt='dot' className='absolute bottom-0 md:right-[20%] right-[5%]' loading='lazy'/>
        {
            <Frames {...data[index]}/>
        }
    </section>
  )
}

export default Mentors