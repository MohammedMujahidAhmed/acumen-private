import React from 'react'
import Marquee from 'react-fast-marquee'
import TeamMember from './TeamMember'
import teammember1 from '../images/team/teammember1.jpg'
import teammember2 from '../images/team/teammember2.jpg'
import teammember3 from '../images/team/teammember3.jpg'
import teammember4 from '../images/team/teammember4.jpg'
import teammember5 from '../images/team/teammember5.jpg'
import teammember6 from '../images/team/teammember6.jpg'
import teammember7 from '../images/team/teammember7.jpg'
import teammember8 from '../images/team/teammember8.jpg'
import teammember9 from '../images/team/teammember9.jpg'
import teammember10 from '../images/team/teammember10.jpg'
import teammember11 from '../images/team/teammember11.jpg'
import teammember12 from '../images/team/teammember12.jpg'
import teammember13 from '../images/team/teammember13.jpg'
import teammember14 from '../images/team/teammember14.jpg'
import teammember15 from '../images/team/teammember15.jpg'

const data = [
    {
        imgsrc:teammember1,
        name:"Srinath",
        desig:"coordinator",
    },
    {
        imgsrc:teammember2,
        name:"Laxman",
        desig:"coordinator",
    },
    {
        imgsrc:teammember3,
        name:"Sathwika",
        desig:"coordinator",
    },
    {
        imgsrc:teammember4,
        name:"Vamsi Krishna",
        desig:"coordinator",
    },
    {
        imgsrc:teammember5,
        name:"Gagana Kumar",
        desig:"coordinator",
    },
    {
        imgsrc:teammember6,
        name:"Mujahid",
        desig:"web Team",
    },
    {
        imgsrc:teammember7,
        name:"Sainith",
        desig:"web Team",
    },
    {
        imgsrc:teammember8,
        name:"Kavya Baireddy",
        desig:"coordinator",
    },
    {
        imgsrc:teammember9,
        name:"Neha Reddy",
        desig:"coordinator",
    },
    {
        imgsrc:teammember10,
        name:"Amogha",
        desig:"coordinator",
    },
    {
        imgsrc:teammember11,
        name:"Praneeth",
        desig:"coordinator",
    },
    {
        imgsrc:teammember12,
        name:"Pragathi",
        desig:"coordinator",
    },
    {
        imgsrc:teammember13,
        name:"Manas Reddy",
        desig:"coordinator",
    },
    {
        imgsrc:teammember14,
        name:"Spoorthi",
        desig:"coordinator",
    },
    {
        imgsrc:teammember15,
        name:"Shishira",
        desig:"coordinator",
    },
]

const OurTeam = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-4 gap-5 text-white'>
        <h3 className='text-3xl'>Our Team</h3>
        <Marquee pauseOnHover autoFill speed={80} className='p-4'>
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