import React, { useEffect } from 'react'
import './Portfolio.css'
import img1 from '../../assets/gamecornerA.png'
import img2 from '../../assets/truckingSite.png'
import img3 from '../../assets/teacherCalcA.png'
import img4 from '../../assets/dashboard.png'
import img5 from '../../assets/DateListTracker.png'
import img6 from '../../assets/originalPortfolio.png'
import { animateOnScroll } from '../../functions/animateScrollFunctions'

const data = [
  {
    id: 1, 
    image: img1,
    title: "Shango's Game Corner",
    github: "https://github.com/Jeff-Shango/word-game.git",
    demo: "https://github.com/Jeff-Shango/word-game.git"
  },
  {
    id: 2, 
    image: img2,
    title: "Only Wright Trucking Site",
    github: "https://github.com/Jeff-Shango/OnlyWrightTraining.git",
    demo: "https://onlywrighttrucking.netlify.app"
  },
  {
    id: 3, 
    image: img3,
    title: "Teacher Grade Tracker",
    github: "https://github.com/Jeff-Shango/GradeTracker.git",
    demo: "https://github.com/Jeff-Shango/GradeTracker.git"
  },
  {
    id: 4, 
    image: img4,
    title: "Dashboard using React",
    github: "https://github.com/Jeff-Shango/dashboard.git",
    demo: "https://github.com/Jeff-Shango/dashboard.git"
  },
  {
    id: 5, 
    image: img5,
    title: "Date Night List Tracker",
    github: "https://github.com/Jeff-Shango/todoapp.git",
    demo: "https://github.com/Jeff-Shango/todoapp.git"
  },
  {
    id: 6, 
    image: img6,
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
        {data.map(({id, image, title, github, demo}) => {
          return(
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt="pic" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn btn-primary portfolioButtons" target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary portfolioButtons' target='_blank'>Live Demo</a>
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