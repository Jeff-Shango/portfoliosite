import React, { useEffect } from 'react'
import './Portfolio.css'
import imgFitness from "../../assets/personalTraining.png"
import imgstambrose from "../../assets/stambrose.png"
// import img1 from '../../assets/gamecornerA.png'
import img2 from '../../assets/truckingSite.png'
// import img3 from '../../assets/teacherCalcA.png'
// import img4 from '../../assets/dashboard.png'
// import img5 from '../../assets/DateListTracker.png'
import img6 from '../../assets/originalPortfolio.png'
import img7 from '../../assets/img7.png'
import { animateOnScroll } from '../../Functions/animateScrollFunctions'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaNodeJs, FaServer } from 'react-icons/fa';
import { SiMinutemailer } from "react-icons/si";
import barsite from '../../assets/barSiteImg.png';
import { SiThreedotjs } from "react-icons/si";



const data = [
  {
    id: 1, 
    image: img7,
    tools:
    ['HTML5',
    <FaHtml5 key="html5" />,
    'CSS3',
    <FaCss3Alt key="css3" />,
    'JavaScript',
    <FaJs key="javascript" />,
    'Emailjs',
    <SiMinutemailer key="emailJs"/>
    ],

    title: "Bozier Wedding Website",
    github: "https://github.com/Jeff-Shango/bobawedding",
    demo: "https://bozierwedding.netlify.app"
  },
  {
    id: 9,
    image: barsite, // Replace with actual image path
    tools: [
      'HTML5',
      <FaHtml5 key="html5" />,
      'CSS3',
      <FaCss3Alt key="css3" />,
      'JavaScript',
      <FaJs key="javascript" />,
      'Three.js',
      <SiThreedotjs key="threejs" /> // Add Three.js Icon
    ],
    title: "3D Scene with Three.js",
    github: "https://github.com/Jeff-Shango/barsite.git",
    demo: "https://bozierbar.netlify.app"
  },
  
  {
    id: 3, 
    image: imgFitness,
    tools: [
      'HTML5',
      <FaHtml5 key="html5" />,
      'CSS3',
      <FaCss3Alt key="css3" />,
      'JavaScript',
      <FaJs key="javascript" />,
      'React',
      <FaReact key="react" />,
      'MySQL',
      <FaDatabase key="mysql" />,
      'Node.js',
      <FaNodeJs key="nodejs" />,
      'Express.js',
      <FaServer key="expressjs" />,
      'Canva'
    ],
    title: "Personal Training Site",
    github: "https://github.com/Jeff-Shango/personaltraining.git",
    demo: "https://jeffbozierfitness.netlify.app"
  },
  {
    id: 2, 
    image: imgstambrose,
    tools:      
    ['HTML5',
    <FaHtml5 key="html5" />,
    'CSS3',
    <FaCss3Alt key="css3" />,
    'JavaScript',
    <FaJs key="javascript" />,
    'React',
    <FaReact key="react" />,
    'MySQL',
    <FaDatabase key="mysql" />,
    'Node.js',
    <FaNodeJs key="nodejs" />,
    'Express.js',
    <FaServer key="expressjs" />,
    'Canva'],
    title: "React Housing Aid Management System: Client Tracking & Grant Management",
    github: "https://github.com/Jeff-Shango/stambroseserver",
    demo: "https://clientlookup.netlify.app"
  },
  {
    id: 4, 
    image: img2,
    tools:
    ['HTML5',
    <FaHtml5 key="html5" />,
    'CSS3',
    <FaCss3Alt key="css3" />,
    'JavaScript',
    <FaJs key="javascript" />,
    
    ],
    title: "Only Wright Trucking Site",
    github: "https://github.com/Jeff-Shango/OnlyWrightTraining.git",
    demo: "https://onlywrighttrucking.netlify.app"
  },
  {
    id: 8, 
    image: img6,
    tools:
    ['HTML5',
    <FaHtml5 key="html5" />,
    'CSS3',
    <FaCss3Alt key="css3" />,
    'JavaScript',
    <FaJs key="javascript" />],
    title: "Original Portfolio",
    github: "https://github.com/Jeff-Shango/Jeff-Bozier-Portfolio.git",
    demo: "https://jeffbozierportfolio.netlify.app"
  },
]
const Portfolio = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);
  
  return (
    <section id='portfolio' className='animate-on-scroll'>
      <h5 className='portfolioTitle'>Portfolio</h5>

      <div className="container portfolio_container">
        {data.map(({id, image, title, tools, github, demo}) => {
          return(
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt="pic" />
            </div>
            <h3>{title}</h3>
            <h4 id="tools">{tools}</h4>
            <div className="portfolio_item-cta">
              <a href={github} className="btn btn-primary portfolioButtons" target='_blank' rel='noreferrer'>Github</a>
              <a href={demo} className='btn btn-primary portfolioButtons' target='_blank' rel='noreferrer'>Live Demo</a>
            </div>
          </article>
          )
        })
        }
        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img2} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img3} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img4} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img5} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img6} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>

    </section>
  )
}

export default Portfolio