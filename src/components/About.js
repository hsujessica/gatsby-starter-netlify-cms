import React from 'react'
import Contact from './Contact'

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <p>Hi, I'm Jessica.</p>
        <p>Code, craft, and crosswords.</p>
        <p>Currently at Block. Previously Dropbox.</p>
      </div>
      <div className="about-section">
        <Contact />
      </div>
      <div className="about-section">
        <p>
          Currently reading: <i>Becoming Myself - Irvin Yalom</i>
        </p>
        <p>
          Currently listening to: <i>Sea Song - Fakear</i>
        </p>
      </div>
    </div>
  )
}

export default About
