import React from 'react'
import Contact from './Contact'

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <p>Hi there! I'm Jessica.</p>
        <p>Coder, crafter, cruciverbalist.</p>
        <p>
          I believe in compassionate code that helps people live more genuinely.
          I started programming in 2012 when curiosity led me to pursue a minor
          in web programming at NYU. Curiosity turned to enthusiasm, and I
          recently spent my summer at Fullstack Academy, updating and refining
          my skills.
        </p>
      </div>
      <div className="about-section">
        <Contact />
      </div>
      <div className="about-section">
        <p>Currently reading: Eckhart Tolle - The Power of Now</p>
        <p>Currently listening to: Mating Ritual - Cold</p>
      </div>
    </div>
  )
}

export default About
