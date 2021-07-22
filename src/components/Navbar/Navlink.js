import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navlink.css'
import { isPathSkintech, isPathBillGenius, isPathIDecide, isPathJoin } from '../Util'
import { lgphone } from '../../breakpoints/MediaBreakpoint'


function Navlink({ children, path, onClick }) {
  const checkHoverText = () => {
    if (isPathSkintech())
      return '-skintech'
    if (isPathBillGenius())
      return '-bill'
    if (isPathIDecide())
      return '-skintech'
    if (isPathJoin())
      return '-join'
    return '';
  }

  const checkLinkText = () => {
    if (window.innerWidth <= lgphone)
      return '-white'
    console.log('checkLinkText()')
    return (isPathSkintech() || isPathBillGenius() || isPathIDecide() || isPathJoin())
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
