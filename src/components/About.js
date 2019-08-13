import React from 'react'
import Contact from './Contact'

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <p>Hi there! I'm Jessica.</p>
        <p>Coder, crafter, cruciverbalist.</p>
        <p>Currently at Dropbox, SF.</p>
      </div>
      <div className="about-section">
        <Contact />
      </div>
      <div className="about-section">
        <p>Currently reading: The Body Keeps the Score - Bessel van der Kolk</p>
        <p>Currently listening to: Dawn, the Front - Talos</p>
      </div>
    </div>
  )
}

export default About
