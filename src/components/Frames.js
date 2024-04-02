import React from 'react'
import '../styles/Frames.css'

const Frames = ({imgsrc,name,desig}) => {
  return (
    <div>
        <section className='flex flex-row gap-3 w-[275px] md:w-[350px] justify-center items-center bg-frame p-2 text-white'>
            <img src={imgsrc} className='rounded-sm w-[60%]' alt='person-img'/>
            <div className='flex flex-col justify-center items-center w-[40%]'>
              <p>{name}</p>
              <p className='brightness-200'>{desig}</p>
            </div>
        </section>
    </div>
  )
}

export default Frames