import React from 'react'
import Project from '../components/project'

const projects = [
  {
    projectSlug: 'friendchips',
    projectTitle: 'Friendchips',
    projectImg:
      'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/786/729/datas/gallery.jpg',
    projectDetails: "HackMentalHealth 2019 - Judges' Recognition Award",
    projectRepo: null,
    projectView: 'https://devpost.com/software/friendchips',
  },
  {
    projectSlug: 'fig',
    projectTitle: 'fig',
    projectImg:
      'https://raw.githubusercontent.com/Capstone1806/fig/master/screenshot.png',
    projectDetails: 'ReactJS, Google Cloud Firestore, React DnD',
    projectRepo: 'https://github.com/Capstone1806/fig',
    projectView: '#',
  },
  {
    projectSlug: 'cormorant-ecommerce',
    projectTitle: 'Cormorant',
    projectImg:
      'https://github.com/Supermodel-Matrices/GraceShopper/raw/master/screenshot.png',
    projectDetails:
      'ReactJS, Redux, Node ExpressJS, Sequelize, PassportJS, CSS',
    projectRepo: 'https://github.com/Supermodel-Matrices/GraceShopper',
    projectView: '#',
  },
  {
    projectSlug: 'neon-extension',
    projectTitle: 'neon',
    projectImg:
      'https://raw.githubusercontent.com/hsujessica/neon/master/screenshot.png',
    projectDetails: 'JavaScript, IndexedDB',
    projectRepo: 'https://github.com/hsujessica/neon',
    projectView: '#',
  },
  {
    projectSlug: 'guessing-game',
    projectTitle: 'Guessing Game',
    projectImg:
      'https://raw.githubusercontent.com/hsujessica/guessing-game/42355350580f7632d853c7d6b74a57720cc702e0/screenshot.png',
    projectDetails: 'JavaScript, jQuery, HTML, CSS',
    projectRepo: 'https://github.com/hsujessica/guessing-game',
    projectView: '#',
  },
  {
    projectSlug: 'fashion-database',
    projectTitle: 'Fashion Database',
    projectImg:
      'https://raw.githubusercontent.com/hsujessica/fashion-database/51f2d5b98be6f1645f25da2992056dbd03df4fc1/screenshot.png',
    projectDetails: 'PHP, MySQL, HTML, CSS',
    projectRepo: 'https://github.com/hsujessica/fashion-database',
    projectView: '#',
  },
  {
    projectSlug: 'food-for-four-legged-friends',
    projectTitle: 'Food for Four-Legged Friends',
    projectImg:
      'https://github.com/hsujessica/pet-food-store/raw/master/screenshot.png',
    projectDetails: 'PHP, JavaScript, HTML, CSS',
    projectRepo: 'https://github.com/hsujessica/pet-food-store',
    projectView: '#',
  },
]

const IndexPage = () => (
  <div className="main-content">
    <div className="projects-display">
      {projects.map(project => (
        <Project project={project} key={project.projectTitle} />
      ))}
    </div>
  </div>
)

export default IndexPage
