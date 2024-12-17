import React, { useEffect, useState } from 'react';
import './Header.css';
import Resume from './CTA';
import profilePic from '../../assets/profilepic.png';
import HeaderSocials from './HeaderSocials';
import { animateOnScroll } from '../../Functions/animateScrollFunctions';

const Header = () => {
  const [languageIndex, setLanguageIndex] = useState(0); // Index for alternating languages
  const [displayText, setDisplayText] = useState(''); // Text being typed
  const [charIndex, setCharIndex] = useState(0); // Current character index

  // Languages dictionary
  const greetings = [
    { lang: 'en', text: "Hello, I'm" },
    { lang: 'es', text: "Hola, soy" },
    { lang: 'ja', text: "こんにちは、私は" },
    { lang: 'pt', text: "Olá, eu sou" },
    { lang: 'zh', text: "你好，我是" }
  ];

  useEffect(() => {
    animateOnScroll();
  }, []); // Only runs once on mount

  useEffect(() => {
    // Function to handle typing effect
    const typeText = () => {
      if (charIndex < greetings[languageIndex].text.length) {
        setDisplayText((prev) => prev + greetings[languageIndex].text[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Wait and reset typing effect for the next language
        setTimeout(() => {
          setCharIndex(0);
          setDisplayText('');
          setLanguageIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 1500); // Pause before switching language
      }
    };

    const typingInterval = setTimeout(typeText, 100); // Typing speed

    return () => clearTimeout(typingInterval); // Cleanup timeout
  }, [charIndex, languageIndex, greetings]); // Include 'greetings' explicitly

  return (
    <header id='header'>
      <div className='container header_container'>
        <div className="container-title">
          <h5 style={{ minHeight: '1.5rem', display: 'inline-block' }}>
            {displayText || '\u00A0'} {/* Prevent shifting */}
          </h5>
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
  );
};

export default Header;
