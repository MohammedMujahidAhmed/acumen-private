import React from 'react'
import '../styles/EventPage.css'
import paperpresentationimg from '../images/eventPosters/1paperpresentation.jpg'
import promptcraftimg from '../images/eventPosters/2promptcraft.jpg'
import projectexpoimg from '../images/eventPosters/3projectexpo.jpg'
import GRAPHICALPALOOZA from '../images/eventPosters/4GRAPHICALPALOOZA.jpg'
import Cubemaster from '../images/eventPosters/5Cubemaster.jpg'
import CODECLASHTICTACTOE from '../images/eventPosters/6CODECLASHTIC-TAC-TOE.jpg'
import SmashKartsTournament from '../images/eventPosters/7SmashKartsTournament.jpg'
import SQUIDGAME from '../images/eventPosters/8SQUIDGAME.jpg'
import IMAGINATIONFORGE from '../images/eventPosters/9IMAGINATIONFORGE.jpg'
import RhythmicReveal from '../images/eventPosters/10RhythmicReveal.jpg'
import IgniteGenesis from '../images/eventPosters/11IgniteGenesis.jpg'
import CINEMOJI from '../images/eventPosters/12CINEMOJI.jpg'
import TreasureHunt from '../images/eventPosters/13TreasureHunt.jpg'
import FlipTicTacToe from '../images/eventPosters/14FlipTicTacToe.jpg'
import TheSAGA from '../images/eventPosters/15TheSAGA.jpg'
import BidAndCode from '../images/eventPosters/16BidAndCode.jpg'
import SyntaxSleuthShowdown from '../images/eventPosters/17SyntaxSleuthShowdown.jpg'
import EventCard from '../components/EventCard'
import Pictionary from '../images/eventPosters/18Pictionary.jpg'
import DecryptNCode from '../images/eventPosters/19DecryptNCode.jpg'



const data = [
    {
        // 1
        name:'Paper Presentation',
        img:paperpresentationimg,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
        date:'18th April 2024',
        description:'We are back with Paper Presentation, where you can display your Research Paper along with your peer and win exciting CASH PRIZES!!  ✨✨🤑🥳',
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 150/- per Team ',
        teamsize:'1-2',
        pricepool:'2500',
        prices:['1500','1000'],
        coord :[{coordinator:'Sarayu',phoneno:'6304696935'},{coordinator:'Sarayu',phoneno:'6304696935'}],
        rules:["You'll have to present your paper on 18th April","Any technical paper related to Computer Science can be presented."],
        posterLink:'#',
        eventLink:'https://forms.gle/UCuJSXbHMrVQjK1P7'
    },
    {
        // 2
        name:'Prompt Craft',
        img:promptcraftimg,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
        date:'18th April 2024',
        description:'Dive into a world where web development meets AI! Show off your skills, learn, and network at Vasavi College of Engineering on 📅 April 18, 2024. Compete, create, and be part of an unforgettable experience. 🖥',
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per Team',
        teamsize:'1-5',
        pricepool:'1500/-',
        prices:[],
        coord :[{coordinator:'Mohit',phoneno:'8106596945'},{coordinator:'Manvith',phoneno:'6309727624'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://forms.gle/RTupuFFQkPwbv2ku9'
    },
    {
        // 3
        name:'Project Expo',
        img:projectexpoimg,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
        date:'18th April 2024',
        description:"Prepare to present your cutting-edge projects and vie for recognition at Acumen 2024, the esteemed tech fest! Whether you're a trailblazer with a pioneering concept or a resourceful problem-solver, Project Expo is your opportunity to shine!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 200/- per Team ',
        teamsize:'1-4',
        pricepool:'2500',
        prices:['1500','1000'],
        coord :[{coordinator:'Deekshitha',phoneno:'+91 8886929456'},{coordinator:'Varsha',phoneno:'+91 9347882630'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSd_lhc1lPIUR0ME3ARllw7HhvuAUBRDOrH0s7OK4eCPSld9WA/viewform'
    },
    {
        // 4
        name:'GRAPHICAL PALOOZA',
        img:GRAPHICALPALOOZA,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
        date:'18th April 2024',
        description:"Unleash your Creativity: Join us for a poster making spectacular!!\nThemes:\n1. Advancements in Artificial Intelligence2. Sustainable Technologie\n3. Blockchain and Cryptocurrency\n4. Internet of Things (IoT)\n5. Emerging Trends in Biotechnology",
        announcement:'Do check the Registration form for Themes',
        fee:'Rs. 150/- per Team',
        teamsize:'1-2',
        pricepool:'2500',
        prices:[],
        coord :[{coordinator:'Sivani',phoneno:'+91 9391616262'},{coordinator:'M.Dhatri',phoneno:'+91 9390482614'},{coordinator:'B.Amulya',phoneno:'+91 7989308053'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://forms.gle/64XiKenzEHfP1ZL77'
    },
    {
        // 5
        name:'Cube master',
        img:Cubemaster,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
        date:'18th April 2024',
        description:"🔥Calling all aspiring cubers to show their talent! Join Us for a Cube Event: Solve, Compete, and Connect!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 50/- per Team',
        teamsize:'1',
        pricepool:'800',
        prices:[],
        coord :[{coordinator:'Ranesh ',phoneno:'+91 7569191820'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSemktlp4MRprQvrfdLDJ9uOdXzdKzaosdPg8LduhgCFINWf8Q/viewform?vc=0&c=0&w=1&flr=0'
    },
    {
        // 6
        name:'CODE CLASH TIC-TAC-TOE',
        img:CODECLASHTICTACTOE,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad',
        date:'18th April 2024',
        description:" Get ready to dive into the ultimate challenge! 🎪 Acumen 2024 proudly presents CODE CLASH TIC-TAC-TOE: Gameify Learning,Study Playfully.  Experience the adrenaline rush as you battle through the games inspired by the hit series!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 50/- per Team',
        teamsize:'1-2',
        pricepool:'',
        prices:[],
        coord :[{coordinator:'Snehitha',phoneno:'+91 9121099513'},{coordinator:'Akshaya',phoneno:'+91 9392922107'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSdXr7MXv5P_8TnZfszmjaViD_u1UQzjv9vECiB12PG_MA88Ug/viewform?usp=sf_link'
    },
    {
        // 7
        name:'Smash Karts Tournament',
        img:SmashKartsTournament,
        venue:' R-block , Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:" Save the date for the 18th of April, the day when virtual roads transform into battlegrounds of excitement and strategy. 🗺 Join us in the virtual realm from wherever you are, as Smash Karts takes over your mobile screens with thrilling action! And for those eager for some real-world fun, don't forget our venue at 📍 R-block , where the excitement comes to life! 📌",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per Team',
        teamsize:'4',
        pricepool:'1500',
        prices:[],
        coord :[{coordinator:'Rahul',phoneno:'6281725757'},{coordinator:'Anudeep',phoneno:'7569210696'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://forms.gle/m6EWBEbsZqVWvWyH7'
    },
    {
        // 8
        name:'SQUID GAME',
        img:SQUIDGAME,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Experience the heart-racing excitement of Red Light, Green Light, the strategic tug of Tug-of-War, and more, as we bring the iconic Squid Game series to life. It's more than just games; it's a test of agility, strategy, and survival instincts. ",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per Head',
        teamsize:'',
        pricepool:'2500',
        prices:[],
        coord :[{coordinator:'Sakshitha',phoneno:'8179446696'},{coordinator:'Ruthvika',phoneno:'9704352657'},{coordinator:'Akshitha',phoneno:'7416363886'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSfgEtfgaSOWZSF7NDW6l9FQmkt_fBIsIv6Z0L4EFORFZKTlOQ/viewform'
    },
    {
        // 9
        name:'IMAGINATION FORGE',
        img:IMAGINATIONFORGE,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Experience the magic of AI-generated images and let your imagination soar! 🌟 Compete in an exhilarating challenge where accuracy meets imagination - the ultimate quest to decode the closest match to the original prompt! 🎨🔍",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per Team',
        teamsize:'1-2',
        pricepool:'1500',
        prices:[],
        coord :[{coordinator:'S.Chinmaye',phoneno:'9391719224'},{coordinator:'V.Keerthi',phoneno:'8247055198'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://forms.gle/EGcGn6zABWRkAHwy6 '
    },
    {
        // 10
        name:'Rhythmic Reveal',
        img:RhythmicReveal,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Gear up for a mind-bending experience at ACUMEN 2024 – The Grand Tech Fest! 🚀 🎼 Get ready to be amazed! 🌟 April 18th, 2024, will be a symphony of surprises! 🎶 Don't miss out!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 50/-',
        teamsize:'',
        pricepool:'',
        prices:[],
        coord :[{coordinator:'Jayasri',phoneno:'6302046820'},{coordinator:'Bhavana',phoneno:'8520083518'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSfz5CE-a61hyAyL088ifUEh8Go8bMLYXgONQfHPcHljy-CQJQ/viewform'
    },
    {
        // 11
        name:'Ignite Genesis',
        img:IgniteGenesis,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Gear up for an electrifying opportunity coming your way! 🌟 Ignite Genesis, the ultimate Start-Up Ideation Contest, is all set to ignite your entrepreneurial spirit at Acumen 2024 - the grand tech fest!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 200/- per team',
        teamsize:'1-4',
        pricepool:'',
        prices:['1500','1000'],
        coord :[{coordinator:'Namratha',phoneno:'+91 9866841602'},{coordinator:' Dhadi Sai Praneeth Reddy',phoneno:'+91 7416466619'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLScis0UKbbIFD_gtndzYa7pbWqKDZczkV8a3ho3LyojFynM7eQ/viewform'
    },
    {
        // 12
        name:'CINEMOJI',
        img:CINEMOJI,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"📽Get ready for a thrilling cinematic experience like never before! Cinemoji is an exciting event where your knowledge of movies and logos will be put to the ultimate test. Gather your friends and join us for a chance to win from a prize pool of 1000!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per team',
        teamsize:'2',
        pricepool:'1000',
        prices:[],
        coord :[{coordinator:'Neha',phoneno:'6301138989'},{coordinator:'Shruthi',phoneno:'9014145103'}],
        rules:['Round 1: Guess the Movie using emojis','Round 2: Guess the Logo'],
        posterLink:'#',
        eventLink:'https://forms.gle/f8TF1nVhEzdrW1RL7'
    },
    {
        // 13
        name:'Treasure Hunt',
        img:TreasureHunt,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Get ready to embark on the ultimate adventure of wit and discovery at Acumen 2024 - the grand tech fest of Vasavi College of Engineering! 🚀 Join us on April 18th, 2024, at our campus in Ibrahimbagh, Hyderabad, for an electrifying Treasure Hunt like never before! 🗝🔍",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 200/- per team',
        teamsize:'1-2',
        pricepool:'4000',
        prices:[],
        coord :[{coordinator:'V.Spoorthi',phoneno:'8125972677'},{coordinator:'Vamsi Krishna',phoneno:'7013432868'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://forms.gle/rpPbK9hYqfLSq7Na8'
    },
    {
        // 14
        name:'Flip Tic Tac Toe',
        img:FlipTicTacToe,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Join us for an unforgettable evening filled with strategic gameplay and friendly competition. This is not just another game night; it's an opportunity to showcase your skills and immerse yourself in a thrilling atmosphere.",
        announcement:'Do check the Registration form for more information',
        fee:'',
        teamsize:'',
        pricepool:'',
        prices:[],
        coord :[{coordinator:'Spoorthy',phoneno:'9492054094'},{coordinator:'Shravya',phoneno:'7675975644'},{coordinator:"Neha",phoneno:'9381514137'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSe3mP2JGlvN4Xw9_vJf1cl0s8r0YQa47nPp1R7GnPKcG0EpUg/viewform'
    },
    {
        // 15
        name:'The SAGA',
        img:TheSAGA,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"The SAGA is here to lift up the fun spirit at Acumen 2024 - the grand tech fest!",
        announcement:'Do check the Registration form for more information',
        fee:'',
        teamsize:'',
        pricepool:'',
        prices:[],
        coord :[{coordinator:'M.Sri Divy',phoneno:'+91 7780536904'},{coordinator:' M.Sriya Krithika',phoneno:'+91 8125348104'},{coordinator:"P Archita Koma",phoneno:'+91 7337568881'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://forms.gle/XZPgNoPiHKPySPx77'
    },
    {
        // 16
        name:'Bid And Code',
        img:BidAndCode,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Are you ready to showcase your coding skills and strategic prowess? Join us for Bid n Code, a thrilling coding competition where strategy meets coding excellence! 🚀",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per Team',
        teamsize:'1-2',
        pricepool:'2500',
        prices:[],
        coord :[{coordinator:'Sumith Kumar',phoneno:'9247298585'},{coordinator:'Rishitha Reddy',phoneno:'7981676069'},{coordinator:"Siddhartha Reddy",phoneno:'7207053174'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/1hV8MpeF6xGFzFe5_44tgKQ6BOl0nwM2EJL2WF0hgWN0 '
    },
    {
        // 17
        name:'Syntax Sleuth Showdown',
        img:SyntaxSleuthShowdown,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Acknowledge your coding skills at Acumen 2024, the grand tech fest! Whether you're a beginner or a creative problem-solver, Syntax sleuth showdown  is your chance to shine! 💡",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 30/- per Head',
        teamsize:'1-4',
        pricepool:'1000',
        prices:[],
        coord :[{coordinator:'FAISAL FARAAZ SYED',phoneno:'+91 7981569376'},{coordinator:'P.UDAY KUMAR',phoneno:'+91 9490273480'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLScuyaW2ApFAQYkd8-ilEIbgZXE9vExP4EqtHi_i0HxbGNMvTQ/viewform'
    },
    {
        // 18
        name:'Pictionary',
        img:Pictionary,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:"Prepare to put your guessing skills to the test in this exhilarating game of wit and imagination 🏆 Compete with fellow thrill-seekers to claim victory and prove your prowess as the ultimate Pictionary champion!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per Team',
        teamsize:'2',
        pricepool:'',
        prices:[],
        coord :[{coordinator:'Harsha ',phoneno:'+91 8374918489'},{coordinator:'Sri Vidya',phoneno:'+91 9246545450'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSclCY3yvONwFavzL4U8GwmthbxhBXsLVx9VKxhGl7_-NS42oQ/viewform'
    },
    {
        // 19
        name:'Decrypt N Code',
        img:DecryptNCode,
        venue:'Vasavi College of Engineering, Ibrahimbagh, Hyderabad.',
        date:'18th April 2024',
        description:" Embark on a journey of decoding, problem-solving, and friendly competition as we present the best of coding challenges. From beginner puzzles to advanced algorithms, there's something for every coder!",
        announcement:'Do check the Registration form for more information',
        fee:'Rs. 100/- per Team',
        teamsize:'1-2',
        pricepool:'2500',
        prices:[],
        coord :[{coordinator:'Satwik ',phoneno:'9182658705'},{coordinator:'Sai Krishna',phoneno:'9392491427'}],
        rules:[],
        posterLink:'#',
        eventLink:'https://docs.google.com/forms/d/e/1FAIpQLSfsARFaREDzvVsB4ZUNgD0yWMPVVxSvP5J0ao-AduYuxQ14QA/viewform'
    },
]

const EventsPage = () => {
  return (
    <section className='min-h-screen bg-black relative overflow-hidden'>
        <section className='max-w-[1200px] m-auto flex flex-col gap-5 text-white p-4 z-100'>
            <h1 className='text-5xl font-bold bg-[linear-gradient(45deg,_#553c9a,_#ee4b2b)] text-transparent bg-clip-text text-center'>Acumen'24 Events</h1>
            <div className='flex flex-row flex-wrap justify-center gap-8 relative'>
                {
                    data.map((d,index)=>(
                        <EventCard key={index} eventData={d}/>
                    ))
                }
            </div>
        </section>

    </section>
  )
}

export default EventsPage