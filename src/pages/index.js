import React from 'react'
import Project from '../components/project'

const projects = [
  {
    projectSlug: 'fig',
    projectTitle: 'fig',
    projectImg: '',
    projectDetails: 'ReactJS, Google Cloud Firestore, React DnD',
    projectRepo: 'https://github.com/Capstone1806/fig',
    projectView: 'https://capstone-fig-1806.herokuapp.com/',
  },
  {
    projectSlug: 'cormorant-ecommerce',
    projectTitle: 'Cormorant',
    projectImg:
      'https://github.com/Supermodel-Matrices/GraceShopper/raw/master/screenshot.png',
    projectDetails:
      'ReactJS, Redux, Node ExpressJS, Sequelize, PassportJS, CSS',
    projectRepo: 'https://github.com/Supermodel-Matrices/GraceShopper',
    projectView: 'http://supermodel-matrices.herokuapp.com/',
  },
  {
    projectSlug: 'neon-extension',
    projectTitle: 'neon',
    projectImg: '',
    projectDetails: 'JavaScript',
    projectRepo: '',
    projectView: '',
  },
  {
    projectSlug: 'guessing-game',
    projectTitle: 'Guessing Game',
    projectImg:
      'https://raw.githubusercontent.com/hsujessica/guessing-game/42355350580f7632d853c7d6b74a57720cc702e0/screenshot.png',
    projectDetails: 'JavaScript, jQuery, HTML, CSS',
    projectRepo: 'https://github.com/hsujessica/guessing-game',
    projectView: 'http://hsujessica.github.io/guessing-game',
  },
  {
    projectSlug: 'fashion-database',
    projectTitle: 'Fashion Database',
    projectImg:
      'https://raw.githubusercontent.com/hsujessica/fashion-database/51f2d5b98be6f1645f25da2992056dbd03df4fc1/screenshot.png',
    projectDetails: 'PHP, MySQL, HTML, CSS',
    projectRepo: 'https://github.com/hsujessica/fashion-database',
    projectView: '',
  },
  {
    projectSlug: 'food-for-four-legged-friends',
    projectTitle: 'Food for Four-Legged Friends',
    projectImg:
      'https://github.com/hsujessica/pet-food-store/raw/master/screenshot.png',
    projectDetails: 'PHP, JavaScript, HTML, CSS',
    projectRepo: 'https://github.com/hsujessica/pet-food-store',
    projectView: '',
  },
]

const IndexPage = () => (
  <div className="projects-display">
    {projects.map(project => (
      <Project project={project} key={project.projectTitle} />
    ))}
  </div>
)

export default IndexPage
