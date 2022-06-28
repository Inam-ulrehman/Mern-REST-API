import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileNavbarComponent = ({ path, title, icon, values, setValues }) => {
  return (
    <li>
      <NavLink onClick={() => setValues(!values)} to={path}>
        {icon} {title}
      </NavLink>
    </li>
  )
}

export default MobileNavbarComponent
