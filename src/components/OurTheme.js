import React, { useEffect, useRef } from 'react'
import jarvis from '../images/jarvis.png'

const OurTheme = () => {
    const themeCard =  useRef(null);

    const applyOverlayMask = (e) => {
        const x = e.pageX - themeCard.current.offsetLeft;
        const y = e.pageY - themeCard.current.offsetTop;
    
        if (!themeCard.current) {
            return;
        }
    
        themeCard.current.setAttribute(
            "style",
            `--x: ${x}px; --y: ${y}px; --opacity: 1`
        );
    };
    

    useEffect(() => {
        document.body.addEventListener("pointermove", (e) => {
        applyOverlayMask(e);
    });
    },[]);

  return (
    <section className='p-4 relative mt-8' ref={themeCard}>
        <section className='flex-1 flex flex-col md:flex-row justify-between items-center gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030] p-4 w-[100%]'>
            <aside>
                <img className='w-[300px]' src={jarvis} alt='jarvis-img'/>
            </aside>
            <article className='md:w-[60%]'>
                <h2 className='brightness-200 text-2xl'>Our Theme</h2>
                <p>
                As the theme for Acumen CSFest 24, JARVIS provides a unique opportunity to delve into the realm of artificial intelligence and its applications. With JARVIS, you can explore the possibilities of creating intelligent systems that mimic human cognitive abilities, revolutionizing various aspects of our lives. From personal assistants to autonomous vehicles, smart homes, and healthcare solutions, artificial intelligence powered by JARVIS is reshaping industries and driving innovation. The theme of JARVIS can inspire participants to develop groundbreaking AI solutions that address real-world challenges and enhance human productivity and efficiency. The techfest can feature a wide array of events such as AI coding competitions, robotics challenges, AI-powered project showcases, and expert talks, offering a platform for students to learn, experiment, and showcase their AI talents.                </p>
            </article>
        </section>

        <section className='flex-1 flex flex-col md:flex-row justify-between items-center gap-5  border-[#6049e4] border border-solid rounded-xl transition-colors bg-[#2b3ca0] text-transparent select-none pointer-events-none p-4 absolute inset-0 w-[100%]'
        style={{
            opacity: "var(--opacity, 0)",
            mask: `
              radial-gradient(
                25rem 25rem at var(--x) var(--y),
                #000 -40%,
                transparent 50%
              )`,
            WebkitMask: `
              radial-gradient(
                25rem 25rem at var(--x) var(--y),
                #000 -40%,
                transparent 50%
              )`,
          }}
        >
            <article className='md:w-[60%]'>
            <aside className='md:w-[40%]'>
                
            </aside>
                <h2 className='brightness-200 text-2xl'>About Us</h2>
                <p>
                As the theme for Acumen CSFest 24, JARVIS provides a unique opportunity to delve into the realm of artificial intelligence and its applications. With JARVIS, you can explore the possibilities of creating intelligent systems that mimic human cognitive abilities, revolutionizing various aspects of our lives. From personal assistants to autonomous vehicles, smart homes, and healthcare solutions, artificial intelligence powered by JARVIS is reshaping industries and driving innovation. The theme of JARVIS can inspire participants to develop groundbreaking AI solutions that address real-world challenges and enhance human productivity and efficiency. The techfest can feature a wide array of events such as AI coding competitions, robotics challenges, AI-powered project showcases, and expert talks, offering a platform for students to learn, experiment, and showcase their AI talents.             
                </p>
            </article>
        </section>

    </section>
  )
}

export default OurTheme