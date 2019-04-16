import React from 'react'
import Contact from './Contact'

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <p>Hi there! I'm Jessica.</p>
        <p>Coder, crafter, cruciverbalist.</p>
        <p>
          Currently at Dropbox, SF. I believe in compassionate code that helps
          people live more genuinely.
        </p>
      </div>
      <div className="about-section">
        <Contact />
      </div>
      <div className="about-section">
        <p>Currently reading: The Deepest Well - Nadine Burke Harris</p>
        <p>Currently listening to: Used To You - Foreign Air</p>
      </div>
    </div>
  )
}

export default About
