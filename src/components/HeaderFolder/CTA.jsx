import React from 'react'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn btn-primary'>Download CV</a>
        <a href="#contact" className='btn-primary btn'>Let's Talk</a>
    </div>
  )
}

export default CTA