import React from 'react'
import '../styles/Event.css'
import { Link } from 'react-router-dom'

const Event = (data) => {
  return (
    <div className='border rounded-lg flex flex-col justify-between bg-event-card w-[300px] '>
          <img src={data.img} alt='event-img' className='rounded-t-lg w-[100%] h-[150px]'></img>
          <div className='p-2 flex flex-col justify-between'>
              <p className='font-bold'>{data.name}</p>
              <p className='italic'>{data.description}</p>
              <Link to='/events/event' state={data} className='p-2 px-4 rounded-lg border-2 w-fit bg-button font-semibold hover:scale-105 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                know more
              </Link>
          </div>
      </div>
  )
}

export default Event  