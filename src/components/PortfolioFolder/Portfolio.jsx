import React, { useEffect } from 'react'
import './Portfolio.css'
import imgFitness from "../../assets/personalTraining.png"
import imgstambrose from "../../assets/stambrose.png"
import img1 from '../../assets/gamecornerA.png'
import img2 from '../../assets/truckingSite.png'
import img3 from '../../assets/teacherCalcA.png'
import img4 from '../../assets/dashboard.png'
import img5 from '../../assets/DateListTracker.png'
import img6 from '../../assets/originalPortfolio.png'
import { animateOnScroll } from '../../Functions/animateScrollFunctions'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaNodeJs, FaServer, FaJava } from 'react-icons/fa';

const data = [
  {
    id: 1, 
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
    id: 3, 
    image: img1,
    tools:
    ['HTML5',
    <FaHtml5 key="html5" />,
    'CSS3',
    <FaCss3Alt key="css3" />,
    'JavaScript',
    <FaJs key="javascript" />,
    ],
    title: "Shango's Game Corner",
    github: "https://github.com/Jeff-Shango/word-game.git",
    demo: "https://github.com/Jeff-Shango/word-game.git"
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
    id: 5, 
    image: img3,
    tools:
    ['HTML5',
    <FaHtml5 key="html5" />,
    'CSS3',
    <FaCss3Alt key="css3" />,
    'JavaScript',
    <FaJs key="javascript" />,
    'Java',
    <FaJava key='Java'/>],
    title: "Teacher Grade Tracker",
    github: "https://github.com/Jeff-Shango/GradeTracker.git",
    demo: "https://github.com/Jeff-Shango/GradeTracker.git"
  },
  {
    id: 6, 
    image: img4,
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
    <FaServer key="expressjs" />,],
    title: "Dashboard using React",
    github: "https://github.com/Jeff-Shango/dashboard.git",
    demo: "https://github.com/Jeff-Shango/dashboard.git"
  },
  {
    id: 7, 
    image: img5,
    tools:
    ['HTML5',
    <FaHtml5 key="html5" />,
    'CSS3',
    <FaCss3Alt key="css3" />,
    'JavaScript',
    <FaJs key="javascript" />],
    title: "Date Night List Tracker",
    github: "https://github.com/Jeff-Shango/todoapp.git",
    demo: "https://github.com/Jeff-Shango/todoapp.git"
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