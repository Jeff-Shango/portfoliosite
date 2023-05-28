import React from 'react'
import Resume from '../../assets/resumeJeffBozier.pdf'

const CTA = () => {

    // show resume on button press
    // show div of pic of resume 
    // div is fixed to screen
    // grays out everything behind it 
    // exit button 
    // download button 
    // download functions 

  return (
    <div className='cta'>
        <a id='resumePic' href={Resume} download className='btn btn-primary'>Download Resume</a>
        <a id='resumePic' href={Resume} className='btn btn-primary'>View Resume</a>
        <a href="#contact" className='btn-primary btn'>Let's Talk</a>
    </div>
  )
}

export default CTA