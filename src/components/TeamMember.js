import React from 'react'
import '../styles/Frames.css'

const TeamMember = ({imgsrc,name,desig}) => {
  return (
    <section className='flex flex-col w-[200px] justify-center items-center bg-frame py-2 text-white m-2 md:m-4 max-h-[200px]'>
        <img src={imgsrc} className='rounded-lg w-[110px] h-[140px]' alt='member' ></img>
        <p>{name}</p>
        <p>{desig}</p>
    </section>
  )
}

export default TeamMember

