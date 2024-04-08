import React, { useEffect, useState } from 'react'
import hod from '../images/hod.jpeg'
import principal from '../images/principal.jpeg'
import jalaja from '../images/jalaja.jpg'
import Frames from './Frames'
import bhargavi from '../images/bhargavi.jpg'

const data = [
    {
        imgsrc:hod,
        name:"Dr. T.Adilakshmi",
        desig:"HOD",
    },
    {
        imgsrc:principal,
        name:"S.V. Ramana",
        desig:"Principal",
    },
    {
        imgsrc:jalaja,
        name:"Ms. T.Jalaja",
        desig:"Faculty",
    },
    {
        imgsrc:bhargavi,
        name:"Dr. Bhargavi Peddi Reddy",
        desig:"Faculty",
    },
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
        {
            <Frames {...data[index]}/>
        }
    </section>
  )
}

export default Mentors