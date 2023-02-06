import React from 'react'
import Header from './components/HeaderFolder/Header'
import About from './components/aboutFolder/About'
import Portfolio from './components/PortfolioFolder/Portfolio'
import Contact from './components/ContactFolder/Contact'
import Footer from './components/FooterFolder/Footer'
import Experience from './components/ExperienceFolder/Experience'
import Navbar from './components/NavbarFolder/Navbar'
import Services from './components/ServicesFolder/Services'
import Testimonials from './components/TestimonialsFolder/Testimonials'
import { checkScreen } from './functions/loaderFunctions'

checkScreen(); 
const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App