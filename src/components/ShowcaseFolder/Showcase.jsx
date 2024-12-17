import React from 'react';
import './Showcase.css';

const Showcase = () => {
  const projects = [
    {
      title: 'Expungement Tracking System',
      role: 'QA Analyst',
      tech: 'SQL, Manual Testing',
      description: 'Managed QA testing for a statewide tracking system with over 100,000 records, ensuring accuracy and compliance.',
    },
    {
      title: 'Firearm Tracking System',
      role: 'QA & System Tester',
      tech: 'Selenium, SQL',
      description: 'Performed rigorous testing and optimization to enhance system performance and data security.',
    },
    {
      title: 'State Asset Management System',
      role: 'System Administrator',
      tech: 'SQL, Reporting Tools',
      description: 'Oversaw tracking and compliance of state assets, improving accuracy and reporting processes.',
    },
    {
      title: 'Interactive Bar Website',
      role: 'Full Stack Developer',
      tech: 'React, Three.js',
      description: 'Created a responsive 3D website with immersive animations and custom navigation features.',
    },
  ];

  return (
    <section className="showcase">
      <h2 className="showcase-title">Professional Projects</h2>
      <div className="showcase-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-role"><strong>Role:</strong> {project.role}</p>
            <p className="project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
