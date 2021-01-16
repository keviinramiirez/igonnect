import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { isPathBillGenius, isPathJoin } from '../Util'
import { lgphone } from '../../breakpoints/MediaBreakpoint'


function Navlink({ children, path, click }) {
  const checkHoverText = () => {
    if (isPathBillGenius())
      return '-bill'
    else if (isPathJoin())
      return '-join'
    else
      return '';
  }

  const checkLinkText = () => {
    if (window.innerWidth <= lgphone)
      return '-white'

    return (isPathBillGenius() || isPathJoin())
      ? '-black'
      : '-white'
  }

  return (
    <NavLink exact to={path}
      className={`
        nav-link 
        text-hover${checkHoverText()} 
        nav-link${checkLinkText()}
      `}
      activeClassName={`nav-link-active${checkHoverText()}`}
    >
      {children}
    </NavLink>
  )
}

export default Navlink
