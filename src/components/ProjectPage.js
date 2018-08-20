import React from 'react'

const ProjectPage = props => (
  <div className="project">
    <h1 className="project-title">{props.project.projectTitle}</h1>
    <p className="project-details">{props.project.projectDetails}</p>
    <a href={props.project.projectRepo}>View Repository</a>
    <img src={props.project.projectImg} className="project-img" />
  </div>
)

export default ProjectPage
