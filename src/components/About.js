import React from 'react'
import Contact from './Contact'

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <p>Hi, I'm Jessica.</p>
        <p>Coder, crafter, cruciverbalist.</p>
        <p>Currently at Square, SF. Previously Dropbox.</p>
      </div>
      <div className="about-section">
        <Contact />
      </div>
      <div className="about-section">
        <p>Currently reading: <i>On Looking: A Walker's Guide to the Art of Observation - Alexandra Horowitz</i></p>
        <p>Currently listening to: <i>Le Point Zéro - Freedom Fry</i></p>
      </div>
    </div>
  )
}

export default About
