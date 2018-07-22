import React from 'react'
import Project from '../components/project'

const projects = [
  {
    'project-slug': 'guessing-game',
    'project-title': 'Guessing Game',
    'project-img': 'https://raw.githubusercontent.com/hsujessica/guessing-game/42355350580f7632d853c7d6b74a57720cc702e0/screenshot.png',
    'project-details': 'JavaScript, jQuery, HTML, CSS',
    'project-github': 'https://github.com/hsujessica/guessing-game',
    'project-view': 'http://hsujessica.github.io/guessing-game'
  },
  {
    'project-slug': 'fashion-database',
    'project-title': 'Fashion Database',
    'project-img': 'https://raw.githubusercontent.com/hsujessica/fashion-database/51f2d5b98be6f1645f25da2992056dbd03df4fc1/screenshot.png',
    'project-details': 'PHP, MySQL, HTML, CSS',
    'project-github': 'https://github.com/hsujessica/fashion-database',
    'project-view': ''
  },
  {
    'project-slug': 'food-for-four-legged-friends',
    'project-title': 'Food for Four-Legged Friends',
    'project-img': 'https://github.com/hsujessica/pet-food-store/raw/master/screenshot.png',
    'project-details': 'PHP, JavaScript, HTML, CSS',
    'project-github': 'https://github.com/hsujessica/pet-food-store',
    'project-view': ''
  }
]

const IndexPage = () => (
  <div className='projects-display'>
    {projects.map(project => (
      <Project project={project} key={project['project-title']} />
    ))}
  </div>
)

export default IndexPage
