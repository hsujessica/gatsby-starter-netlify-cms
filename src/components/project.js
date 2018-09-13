import React from 'react'
import Link from 'gatsby-link'

const Project = props => (
  <div className="project">
    {/* <Link to={`/${props.project.projectSlug}`}> */}
    <a href={props.project.projectView}>
      <img src={props.project.projectImg} className="project-img" />
      <p className="project-title">{props.project.projectTitle}</p>
    </a>
    <p className="project-details">{props.project.projectDetails}</p>
    <a
      className="project-repo-link"
      href={props.project.projectRepo}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Repo
    </a>
    {/* </Link> */}
  </div>
)

export default Project
