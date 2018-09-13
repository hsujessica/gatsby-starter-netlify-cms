import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 className="header-title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <ul className="nav">
      <Link to="/">
        <li className="nav-link">Code</li>
      </Link>
      <Link to="/craft">
        <li className="nav-link">Craft</li>
      </Link>
    </ul>
  </div>
)

export default Header
