import React, { useEffect } from 'react'
import './Testimonials.css'
import mikePhoto from '../../assets/headshotWTruck.jpg'
import { animateOnScroll } from '../../functions/animateScrollFunctions'

const Testimonials = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section id='testimonials' className='animate-on-scroll'>
      <h5 className='testimonialTitle'>Review from clients</h5>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={mikePhoto} alt="testimonial photo" />
            
          </div>
          <h5 className="client_name">Michael Wright</h5>
            <small className="client_review">
              Convenient. Very punctual. Pays attention to detail. Team player. Look out web designers, new sheriff in town <br />-Only Wright Trucking, LLC
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials