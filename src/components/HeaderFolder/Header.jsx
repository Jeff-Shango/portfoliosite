import React, { useEffect } from 'react'
import './Header.css'
import Resume from './CTA'
import profilePic from '../../assets/profilepic.png'
import HeaderSocials from './HeaderSocials'
import { animateOnScroll } from '../../functions/animateScrollFunctions'

const Header = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <header>
      <div className='container header_container'>
        <div className="container-title">
          <h5>Greetings and welcome,<br/>My name is</h5>
          <h1>Jeff Bozier</h1>
          <h5 className="text-light">Software Engineer</h5>
        </div>
        <Resume /> 
        <HeaderSocials />

        <div className="me">
            <img src={profilePic} alt="Profile Pic" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header