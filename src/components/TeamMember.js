import React from 'react'
import '../styles/Frames.css'

const TeamMember = ({imgsrc,name,desig}) => {
  return (
    <section className='flex flex-col justify-center items-center bg-frame p-2 text-white m-4 max-h-[200px]'>
        <img src={imgsrc} className='rounded-full w-[50%]' alt='member' ></img>
        <p>{name}</p>
        <p>{desig}</p>
    </section>
  )
}

export default TeamMember