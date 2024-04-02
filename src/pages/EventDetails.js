import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/EventDetails.css'

const EventDetails = () => {
    let { state } = useLocation();
  return (
    <section className='min-h-screen bg-zinc-800 p-4'>
        <section className='max-w-[1200px] m-auto flex flex-col justify-center items-center text-white bg-event'>
            <h1 className='text-3xl font-bold'>{state.name}</h1>
            <article className='p-2'>
                <img src={state.img} className='rounded-lg' alt='event-img'></img>
                <div className='flex md:flex-row flex-col w-[100%] justify-between p-4 gap-8'>
                    <a href='https://www.google.com/' className='button-85 brightness-120 font-semibold text-center'>Event Poster</a>
                    <a href='https://www.google.com/' className='button-85 brightness-120 font-semibold text-center'>Register Now</a>
                </div>
                <div>
                    <p className='italic text-center text-xl'>{state.description}</p>
                    <p className='text-red-600 text-2xl'>Start at {state.startTime}</p>
                    <p className='text-red-600 text-2xl'>Venue : {state.venue}</p>
                    <div>
                        <p className='font-semibold text-2xl'>Rules:</p>
                        <div>
                            {
                                state.rules.map((rule,index)=>(
                                    <p className='italic'>&nbsp;    {rule}</p>
                                ))
                            }
                        </div>
                    </div>
                    <h4 className='text-red-600 text-xl'>Registration Fee : Rs.{state.fee}</h4>
                    <div>
                        <p>Event coordinator</p>
                        <div>
                            <p>&nbsp;{state.coordinator1name} : {state.phnocoordinator1}</p>
                            <p>&nbsp;{state.coordinator2name} : {state.phnocoordinator2}</p>
                        </div>
                    </div>
                    {/* {state.posterLink} */}
                    {/* {state.eventLink} */}
                </div>
            </article>
        </section>
    </section>
  )
}

export default EventDetails