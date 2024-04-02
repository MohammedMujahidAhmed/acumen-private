import React from 'react'
import Marquee from 'react-fast-marquee'
import user from '../images/user.png'
import TeamMember from './TeamMember'

const data = [
    {
        imgsrc:user,
        name:"member",
        desig:"designation",
    },
    {
        imgsrc:user,
        name:"member",
        desig:"designation",
    },
    {
        imgsrc:user,
        name:"member",
        desig:"designation",
    },
    {
        imgsrc:user,
        name:"member",
        desig:"designation",
    },
    {
        imgsrc:user,
        name:"user",
        desig:"designation",
    },
    {
        imgsrc:user,
        name:"member",
        desig:"designation",
    },
    {
        imgsrc:user,
        name:"member",
        desig:"designation",
    },
]

const OurTeam = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-4 gap-5 text-white'>
        <h3 className='text-3xl'>Our Team</h3>
        <Marquee pauseOnHover autoFill className='p-4'>
            {
                data.map((d,index)=>(
                    <TeamMember key={index} {...d}/>
                ))
            }
        </Marquee>
    </section>
  )
}

export default OurTeam