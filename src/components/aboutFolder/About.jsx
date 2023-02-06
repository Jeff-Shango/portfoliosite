import React, { useEffect } from 'react'
import "./About.css"
import aboutMeImage from "../../assets/abourImg.png"
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { animateOnScroll } from '../../functions/animateScrollFunctions'



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
            <img src={aboutMeImage} alt="about me image" />
          </div>

        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
          Meet Jeff Bozier, a skilled software engineer from Baltimore, MD with extensive experience in full cycle web development. With a passion for creating innovative and user-friendly web solutions, Jeff is always eager to discuss future projects and opportunities in the software engineering field. Get in touch with him today to see how he can help with your development needs.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About