import React, { useEffect } from 'react'
import './Footer.css'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import { animateOnScroll } from '../../functions/animateScrollFunctions'

const Footer = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);
  return (
    <footer className='animate-on-scroll'>
      <a href="#" className="footer_logo">Jeff B</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/jeff-bozier-jr/"><AiFillLinkedin /></a>
        <a href="https://github.com/jeff-shango"><BsGithub/></a>
      </div>

      <div className="footer_socials">
        <small>&copy; Jeff Bozier. 2023</small>
      </div>
    </footer>
  )
}

export default Footer