import React from 'react'
import { NavLink } from 'react-router-dom'

const SharedNavbar = ({ path, title, icon }) => {
  return (
    <li>
      <NavLink to={path}>
        {icon} {title}
      </NavLink>
    </li>
  )
}

export default SharedNavbar
