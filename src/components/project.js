import React from 'react'
import Link from 'gatsby-link'

const Project = (props) => (
  <div className='project'>
  <Link to={`/${props.project['project-slug']}`}>
  <img src={props.project['project-img']} className='project-img'></img>
    <h1 className='project-title'>{props.project['project-title']}</h1>
    <p className='project-details'>{props.project['project-details']}</p>
  </Link>
  </div>
)

export default Project
