import React from 'react'
import '../styles/Event.css'
import { Link } from 'react-router-dom'

const Event = (data) => {
  return (
    <div className='border rounded-lg flex flex-col justify-between bg-event-card w-[300px] hover:scale-105 shadow-[0_3px_8px_rgba(240,_46,_170,_0.7)]'>
          <img src={data.img} alt='event-img' className='rounded-t-lg w-[100%] h-[150px]' loading='lazy'></img>
          <div className='p-2 gap-4 flex flex-col justify-around h-[100%]'>
              <p className='font-bold '>{data.name}</p>
              <Link to='/events/event' state={data} className='p-2 px-4 rounded-lg border-2 w-fit bg-button font-semibold hover:scale-105 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                know more
              </Link>
          </div>
      </div>
  )
}

export default Event  