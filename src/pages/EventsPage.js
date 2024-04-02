import React from 'react'
import user from '../images/sampleImage.jpg'
import Event from '../components/Event'

const data = [
    {
        name:'Event name',
        img:user,
        venue:'venue of event',
        startTime:'event starts at',
        description:'a brief description about the event',
        fee:'amount',
        coordinator1name:'name1',
        coordinator2name:'name2',
        phnocoordinator1:'123456789',
        phnocoordinator2:'123456789',
        rules:['rule 1','rule 2'],
        posterLink:'#',
        eventLink:'#'
    },
    {
        name:'Event name',
        img:user,
        venue:'venue of event',
        startTime:'event starts at',
        description:'a brief description about the event',
        fee:'amount',
        coordinator1name:'name1',
        coordinator2name:'name2',
        phnocoordinator1:'123456789',
        phnocoordinator2:'123456789',
        rules:['rule 1','rule 2'],
        posterLink:'#',
        eventLink:'#'
    },
    {
        name:'Event name',
        img:user,
        venue:'venue of event',
        startTime:'event starts at',
        description:'a brief description about the event',
        fee:'amount',
        coordinator1name:'name1',
        coordinator2name:'name2',
        phnocoordinator1:'123456789',
        phnocoordinator2:'123456789',
        rules:['rule 1','rule 2'],
        posterLink:'#',
        eventLink:'#'
    },
    {
        name:'Event name',
        img:user,
        venue:'venue of event',
        startTime:'event starts at',
        description:'description of the event ',
        fee:'amount',
        coordinator1name:'name1',
        coordinator2name:'name2',
        phnocoordinator1:'123456789',
        phnocoordinator2:'123456789',
        rules:['rule 1','rule 2'],
        posterLink:'#',
        eventLink:'#'
    },
    {
        name:'Event name',
        img:user,
        venue:'venue of event',
        startTime:'event starts at',
        description:'a brief description about the event',
        fee:'amount',
        coordinator1name:'name1',
        coordinator2name:'name2',
        phnocoordinator1:'123456789',
        phnocoordinator2:'123456789',
        rules:['rule 1','rule 2'],
        posterLink:'#',
        eventLink:'#'
    },
]

const EventsPage = () => {
  return (
    <section className='min-h-screen bg-zinc-800 '>
        <section className='max-w-[1200px] m-auto flex flex-col gap-5 text-white p-4'>
            <h1 className='text-3xl brightness-200 font-bold text-center'>Events</h1>
            <div className='flex flex-row flex-wrap justify-center gap-8'>
                {
                    data.map((d,index)=>(
                        <Event key={index} {...d}/>
                    ))
                }
            </div>
        </section>

    </section>
  )
}

export default EventsPage