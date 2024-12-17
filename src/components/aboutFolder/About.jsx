import React, { useEffect } from 'react'
import "./About.css"
import aboutMeImage from "../../assets/abourImg.png"
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { animateOnScroll } from '../../Functions/animateScrollFunctions'



const About = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section id='about' className='animate-on-scroll'>
        <h5 className='aboutTitleContent'>Get to Know Me</h5>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={aboutMeImage} alt="aboutme" />
          </div>

        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>4 Years Working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
          Meet Jeff Bozier, a results-driven IT professional specializing in Quality Assurance, System Administration, and Software Development. With experience managing statewide systems and building interactive web applications, I bring a unique blend of testing, optimization, and development expertise. My goal is to craft reliable, efficient solutions that deliver a seamless user experience.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About