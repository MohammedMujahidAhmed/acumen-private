import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/EventDetails.css'

const EventDetails = () => {
    let { state } = useLocation();
  return (
    <section className='min-h-screen h-[100%] bg-black p-4 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#1b2735_0%,#090a0f_100%)]'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <section className='max-w-[1200px] m-auto flex flex-col p-4 justify-center items-center text-white bg-event'>
            <h1 className='text-5xl font-bold bg-[linear-gradient(45deg,_#553c9a,_#ee4b2b)] text-transparent bg-clip-text'>{state.name}</h1>
            <article className='p-2'>
                <div className='flex flex-col p-2 items-center'>
                    <img src={state.img} className='rounded-lg w-[300px]' alt='event-img'></img>
                    <div className='flex md:flex-row flex-col w-[100%] justify-center    items-end p-4 gap-8'>
                        {/* <a href='https://www.google.com/' className='button-85 brightness-120 font-semibold text-center'>Event Poster</a> */}
                        <a href={state.eventLink} target='_blank' rel='noreferrer' className='button-85 brightness-120 font-semibold text-center'>Register Now</a>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='flex flex-col items-center gap-4'>
                        <p className='italic text-center text-xl bg-[repeating-linear-gradient(to_right,_#553c9a,_#ee4b2b_10%,_#553c9a_20%)] text-transparent bg-clip-text brightness-200'>{state.description}</p>
                        <p className='text-red-600 md:text-2xl'>Date : <span className='text-blue-700 brightness-200'>{state.date}</span></p>
                        <p className='text-red-600 md:text-2xl'>Venue : <span className='brightness-200 text-blue-700'>{state.venue}</span></p>
                    </div>
                    {
                        state.rules.length !== 0 &&
                        <div>
                            <p className='font-semibold md:text-2xl '>Rules:</p>
                            <div>
                                {
                                    state.rules.map((rule,index)=>(
                                        <p className='italic'>&nbsp;{rule}</p>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    <div className='flex flex-col md:items-center md:justify-center'>
                        <h4 className='text-red-600 md:text-xl text-center'>Registration Fee : <span className='brightness-200 text-blue-700'>{state.fee}</span></h4>
                        {
                            state.teamsize !== '' &&

                            <div>
                                <p className='md:text-xl text-blue-600'>Team size : <span className='font-semibold'>{state.teamsize}</span></p>
                            </div>
                        }
                        {
                            state.pricepool !== '' &&

                            <div>
                                <p className='md:text-xl text-blue-600'>Prize pool : <span className='font-semibold'>{state.pricepool}</span></p>
                            </div>
                        }
                        {
                            state.prices.length !== 0 &&

                            <div>
                                {
                                    state.prices.map((p,index)=>(
                                        <p className='md:text-xl text-blue-600' key={index}>Prize {index+1} : {p}</p>
                                    ))
                                }
                            </div>
                        }
                    </div>

                    <div>
                        <p className='font-semibold md:text-xl'>Event coordinator</p>
                        <div>
                            {
                                state.coord.map((c,index)=>(
                                    <p key={index}>&nbsp;{c.coordinator} : {c.phoneno}</p>
                                ))
                            }
                        </div>
                    </div>
                    <p className='md:text-md text-red-500 text-center'>***{state.announcement}</p>
                    {/* {state.posterLink} */}
                </div>
            </article>
        </section>
    </section>
  )
}

export default EventDetails