import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navlink.css'
import { isPathHome, isPathBillGenius, isPathJoin } from '../Util'
import { lgphone } from '../../breakpoints/MediaBreakpoint'


// function Navlink({ children, path, click }) {
function Navlink({ children, path, onClick }) {
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
    console.log('checkLinkText()')
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
      onClick={onClick}
      activeClassName={`nav-link-active${checkHoverText()}`}
    >
      {children}
    </NavLink>
  )
}

export default Navlink
