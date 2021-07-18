import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navlink.css'
import { isPathSkintech, isPathBillGenius, isPathIDecide, isPathJoin } from '../Util'
import { lgphone } from '../../breakpoints/MediaBreakpoint'

const checkLinkText = () => {
  if (window.innerWidth <= lgphone)
    return 'white'
  console.log('checkLinkText()')
  return (isPathSkintech() || isPathBillGenius() || isPathIDecide() || isPathJoin())
    ? 'black'
    : 'white'
  // return '-black'
}

function Navlink({ children, path, onClick, isMobile }) {
  const [linkColor, setLinkColor] = useState('white')
  // const checkHoverText = () => {
  //   if (isPathSkintech())
  //     return '-skintech'
  //   if (isPathBillGenius())
  //     return '-bill'
  //   if (isPathIDecide())
  //     return '-skintech'
  //   if (isPathJoin())
  //     return '-join'
  //   return '';
  // }




  useEffect(() => {//eslint-disable-line
    console.log('pasandp por quie', window.innerWidth <= lgphone, window.innerWidth, lgphone)
    if (window.innerWidth <= lgphone)
      setLinkColor('white')
    else 
    setLinkColor('black')
  })

  return (
    <NavLink exact to={path}
      style={{ 
        color: isMobile ? 'white' : 'black', 
        width: isMobile ? '100%' : '',
      }}
      onClick={onClick}
    >
      {children}
    </NavLink>
    // <NavLink exact to={path}
    //   className={`
    //     nav-link 
    //     text-hover${checkHoverText()} 
    //     nav-link${checkLinkText()}
    //   `}
    //   onClick={onClick}
    //   activeClassName={`nav-link-active${checkHoverText()}`}
    // >
    //   {children}
    // </NavLink>
  )
}

export default Navlink
