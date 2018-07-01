import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <h1 className='header-title'><Link to='/'>{siteTitle}</Link></h1>
    <ul className='nav'>
      <Link to='/'><li className='nav-link'>Programming</li></Link>
      <Link to='/contact'><li className='nav-link'>Contact</li></Link>
    </ul>
  </div>
)

export default Header
