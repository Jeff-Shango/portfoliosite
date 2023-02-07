import React, { useState} from 'react'
import './Navbar.css'
import {AiOutlineHome, AiOutlineUser, AiFillDatabase} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdEmojiPeople} from 'react-icons/md'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
  <nav>
    <a id='navLink' href="#header"
    onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a id='navLink' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a id='navLink' href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
    <a id='navLink' href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
    <a id='navLink' href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillDatabase/></a>
    <a id='navLink' href="#testimonials"  onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><MdEmojiPeople/></a>
    <a id='navLink' href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
  </nav>
  )
}

export default Navbar