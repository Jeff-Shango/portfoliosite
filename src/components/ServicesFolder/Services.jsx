import React, { useEffect } from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import { animateOnScroll } from '../../functions/animateScrollFunctions'

const Services = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section id='services' className='animate-on-scroll'>
      <h5 className='servicesTitle'>What I Offer</h5>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Heavy use of CSS3 within projects.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Experience using Figma in web development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Experience using CSS library's Bootstrap.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Use of Adobe Systems Adobe XD.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon lastIcon' />
              <p>Designing focuses on usability with responsive design, consistent elements, clear content, and intuitive navigation for a positive user experience.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Knowledge of different IDEs such as VS Code and Sublime Text.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Knowledge and organizational skills using version control systems such as Git.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Strong experience using JavaScript frameworks/libraries such as React & Vue.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Usage of The Node Package Manager to download dependencies within the terminal for projects.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Backend and Database knowledge such as Java, MySQL, MongoDB and ability to learn others.</p>
            </li>
          </ul>
        </article>
        {/* end of web devopment */}

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Use of Markdown editors such as VS Code to create clean, organized and organic code.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Experience using graphic design tools such as Canva, Adobe Photoshop, and GNU Image Manipulation Program.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Knowledge of audio editing software such as Ableton Live, FL Studio, etc.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ability to use and express ideas through presentation with the tools of Microsoft Office.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Able to create data-based information in an organized way using relational databases like Tableau, Microsoft Excel, etc.</p>
            </li>
          </ul>
        </article>
{/* end of content creation */}
      </div>
    </section>
  )
}

export default Services