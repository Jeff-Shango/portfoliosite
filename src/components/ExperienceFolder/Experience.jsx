import React, { useEffect } from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { animateOnScroll } from '../../Functions/animateScrollFunctions'

const Experience = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section id='experience' className='animate-on-scroll'>
      <h5 className='experienceTitle'>My Experience</h5>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML & CSS</h4>
                <small className="text-light">Built responsive and accessible UI components</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Implemented dynamic features and optimized code performance.</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Three.js</h4>
                <small className="text-light">Created 3D visualizations and animations to add engaging, interactive experiences for users.</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Linux Os</h4>
                <small className="text-light">Leveraged Linux environments for development and deployment workflows. Used terminal scripting, version control (Git), and open-source tools to streamline frontend development and troubleshooting.</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">Created interactive web applications with API integration.
                </small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Canva</h4>
                <small className="text-light">Utilized Canva for rapid prototyping of UI designs, creating consistent visuals, banners, and graphics to enhance web presentation.</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>WordPress</h4>
                <small className="text-light">Customized and optimized WordPress websites by designing themes, plugins, and responsive layouts, ensuring easy client management.</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Wrote scripts for automation and system optimization.
                </small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Developed server-side solutions for scalable applications.
                </small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Managed databases with efficient queries and data organization.</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Tableau</h4>
                <small className="text-light">Designed visual dashboards and data visualizations to identify trends and streamline decision-making for project stakeholders</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Containerized applications for streamlined deployment.</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Excel Spreadsheet</h4>
                <small className="text-light">Managed and analyzed large datasets across state projects, including the Expungement Tracking System and Asset Management System. Created automated workflows, reports, and dashboards for improved data accuracy.</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience