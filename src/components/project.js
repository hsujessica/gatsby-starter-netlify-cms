import React from 'react'
import Link from 'gatsby-link'

const Project = props => (
  <div className="project">
    <Link to={`/${props.project.projectSlug}`}>
      <img src={props.project.projectImg} className="project-img" />
      <h1 className="project-title">{props.project.projectTitle}</h1>
      <p className="project-details">{props.project.projectDetails}</p>
    </Link>
  </div>
)

export default Project
