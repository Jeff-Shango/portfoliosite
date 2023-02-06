import React, {useRef, useEffect} from 'react'
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { animateOnScroll } from '../../functions/animateScrollFunctions'

const Contact = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4dfcr2e', 'template_cbdgzvt', form.current, '_NpdWJ5iCT6lmb6Un')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact' className='animate-on-scroll'>
      <h5 className='contactTitle'>Get In Touch</h5>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Jeff.BozierJr@gmail.com</h5>
            <h5>Send an Email</h5>
            <a href="mailto:jeff.bozierjr@gmail.com" className='btn btn-primary' target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsGithub className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Send a message through LinkedIn</h5>
            <a href="https://www.linkedin.com/in/jeff-bozier-jr/" className='btn btn-primary' target="_blank">Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputBox">
            <input type="text" name='name' required />
            <span>Your Name</span>
          </div>

          <div className="inputBox">
            <input type="text" name='email'  required />
            <span>Your Email</span>
          </div>

          <div className="inputBox">
            <textarea name="message" rows="7"  required></textarea>
            <span>Your Message</span>
          </div>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact