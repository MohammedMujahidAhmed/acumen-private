import React, { useEffect, useRef } from 'react'
import csvce from '../images/csvce.png'

const About = () => {
    const aboutCard =  useRef(null);

    const applyOverlayMask = (e) => {
        const x = e.pageX - aboutCard.current.offsetLeft;
        const y = e.pageY - aboutCard.current.offsetTop;
    
        if (!aboutCard.current) {
            return;
        }
    
        aboutCard.current.setAttribute(
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
    <section className='p-4 relative' ref={aboutCard}>
        <section className='flex-1 flex flex-col md:flex-row justify-between items-center gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030] p-4 w-[100%]'>
            <article className='md:w-[60%]'>
                <h2 className='brightness-200 text-2xl'>About Us</h2>
                <p className='brightness-200'>
                Acumen CS Fest is a technical fest which is organized by the college and the department every year to give an opportunity to the students to expand their technical horizon and to apply the knowledge practically. The fest provides a platform to the students to participate with a competitive spirit. Focusing on the enthusiasm of the first years, competitiveness of second and third years, dedication and determination of fourth years, we will organize the Acumen CS Tech Fest. The fest include but not limited to events like Paper Presentation, Poster Presentation, Workshop, Quiz, CPU assemble, LAN Gaming, Tech Jam, Tech Tube, IDEA Presentation, Web Designing, Design demonstration, Creative kick, Tech debate and new events are being added every year.
                </p>
            </article>
            <aside>
                <img src={csvce} alt='csevclogo'/>
            </aside>
        </section>

        <section className='flex-1 flex flex-row md:flex-row justify-between items-center gap-5 border-[#6049e4] border border-solid rounded-xl transition-colors bg-[#2b3ca0] text-transparent select-none pointer-events-none p-4 absolute inset-0 w-[100%] '
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
                <h2 className='brightness-200 text-2xl'>About Us</h2>
                <p>
                Acumen CS Fest is a technical fest which is organized by the college and the department every year to give an opportunity to the students to expand their technical horizon and to apply the knowledge practically. The fest provides a platform to the students to participate with a competitive spirit. Focusing on the enthusiasm of the first years, competitiveness of second and third years, dedication and determination of fourth years, we will organize the Acumen CS Tech Fest. The fest include but not limited to events like Paper Presentation, Poster Presentation, Workshop, Quiz, CPU assemble, LAN Gaming, Tech Jam, Tech Tube, IDEA Presentation, Web Designing, Design demonstration, Creative kick, Tech debate and new events are being added every year.
                </p>
            </article>
        </section>

    </section>
  )
}

export default About