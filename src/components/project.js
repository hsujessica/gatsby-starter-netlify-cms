import React from 'react'
import Link from 'gatsby-link'

const Project = () => (
  <div className='project'>
  <Link to='/project-one'>
  <img src='http://newfoundlandsportsman.com/wp-content/uploads/2013/11/dummy-image-landscape.jpg' className='project-img'></img>
    <h1 className='project-title'>Project One</h1>
    <p className='project-details'>Express.js, Sequelize, React.js, d3.js</p>
  </Link>
  </div>
)

export default Project
