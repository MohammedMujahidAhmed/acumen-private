import React from 'react'

const Footer = () => {
  return (
    <section className='p-2 flex flex-col items-center justify-center'>
      <div className='w-[97%] h-[2px] bg-blue-600'></div>
      <article>
        <p className='text-center m-2 text-gray-500'>Vasavi College of Engineering
(Private Un-aided Non-minority Autonomous Institution)
Affiliated to Osmania University, Hyderabad
Approved by AICTE, New Delhi
9-5-81, Ibrahimbagh
Hyderabad - 500 031
Telangana, India.</p>
        <div className='flex flex-row justify-between p-4 items-center'>  
          <p className='text-gray-500'>Acumen</p>
          <div className='w-[2px] h-[20px] bg-gray-500 border-gray-500'></div>
          <p className='text-gray-500'>CSFEST'24</p>
        </div>
      </article>
      <div>
        <p className='text-gray-500 text-2xl text-center m-2'>Designed and developed by <a href='https://www.linkedin.com/in/mohammed-mujahid-ahmed-913418221/' rel="noreferrer" target='_blank' className='text-blue-900 brightness-150'>@Mohammed Mujahid Ahmed</a> , <a href='https://www.linkedin.com/in/sainith/' rel="noreferrer" target='_blank' className='text-blue-900 brightness-150'>@Yamsani Sainith</a></p>
      </div>
    </section>
  )
}

export default Footer;


