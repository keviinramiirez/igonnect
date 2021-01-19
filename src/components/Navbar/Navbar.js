import React, { useEffect } from 'react'
import './Navbar2.css'
import IgonnectWhiteSvg from '../../assets/SVG/igonnect_logo_white2.svg'
import IgonnectBlackSvg from '../../assets/SVG/igonnect_logo_black2.svg'
import Button from '../Button/Button'
import Navlink from './Navlink'
import { MenuItems } from './MenuItems'
import { isPathBillGenius, isPathJoin } from '../Util'
import { desktop, tablet, lgphone, phone } from '../../breakpoints/MediaBreakpoint'


function Navbar({ click, handleClick, showRegularNavbar, showButton, closeMobileMenu }) {
  const checkLogoColor = () => {
    return !(isPathBillGenius() || isPathJoin())
  }


  const checkLogoSize = () => {
    let innerWidth = window.innerWidth;
    let width = 200, height = 200;
    // if (innerWidth <= phone)
    //   width = height = 120;
    // else 
    if (innerWidth <= lgphone)
      width = height = 150;

    return <img
      src={checkLogoColor() ? IgonnectWhiteSvg : IgonnectBlackSvg}
      width={width}
      height={width}
      alt='igonnect logo' />
  }

  return (
    <div
      className='navv'
      style={click
        ? {
          backgroundColor: '#242222',
          height: (window.outerHeight + 'px'),
          overflow: 'hidden',
          top: '0'
        }
        : {}
      }>
      {/* {(click || showRegularNavbar) ? */}
      <header>
        {/* {click 
          ? null
          :
          <div className='navv__mobileNav'>
            <Navlink path='/' onClick={closeMobileMenu}>
              <img src={checkLogoColor() ? IgonnectWhiteSvg : IgonnectBlackSvg} width='200' height='200' alt='igonnect logo' />
            </Navlink>
            <div className='menu-icon menu-icon-bars' onClick={() => handleClick()} style={{ color: ((isPathBillGenius() || isPathJoin()) && !click) ? 'black' : 'white' }}>
              <i className={'fas fa-bars'} />
            </div>
          </div>
        }
        {
          click
            ?
            <div className='menu-icon menu-icon-times' onClick={() => handleClick()}>
              <i className={'fas fa-times'} style={{ color: 'white' }} />
            </div>
            :
            <div className='navv__logo'>
              <Navlink path='/' onClick={closeMobileMenu}>
                <img src={checkLogoColor() ? IgonnectWhiteSvg : IgonnectBlackSvg} width='200' height='200' alt='igonnect logo' />
              </Navlink>
            </div>
        } */}
        {
          (click) ?
            <div className='menu-icon menu-icon-times' onClick={() => handleClick()}>
              <i className={'fas fa-times'} style={{ color: 'white' }} />
            </div>
            :
            <div className='navv__mobileNav'>
              {
                <div className='navv__logo'>
                  <Navlink path='/' onClick={closeMobileMenu}>
                    {/* <img 
                    src={checkLogoColor() ? IgonnectWhiteSvg : IgonnectBlackSvg} 
                    width='200' 
                    height='200' 
                    alt='igonnect logo' /> */}
                    {checkLogoSize()}
                  </Navlink>
                </div>
              }
              <div className='menu-icon menu-icon-bars' onClick={() => handleClick()}
                style={{ color: ((isPathBillGenius() || isPathJoin()) && !click) ? 'black' : 'white' }}
              >
                <i className={'fas fa-bars'} />
              </div>
            </div>
        }
        {(click || showRegularNavbar) ?
          <nav>
            <ul className='navv__links'>
              {MenuItems.map(({ title, path }) => {
                return (
                  <li key={title} className='navv__item' style={{ marginLeft: (!click ? '2.5em' : 0) }}>
                    <div className='nav-content'>
                      <div className='nav-link-component'
                        onClick={() => closeMobileMenu()}>
                        <Navlink
                          path={path}
                          onClick={closeMobileMenu}
                        >
                          {title.includes('Join') ?
                            null
                            : title}
                          {/* (
                              click ? null :
                                <Button
                                  buttonSize='size__navbar'
                                  buttonStyle='style__transparent'
                                  buttonBorder='border__secondary'
                                  buttonColor='color__white'
                                  buttonHover='hover__secondary'
                                  buttonEffect='effect__move_y'
                                >
                                  Join
                              </Button>
                            ) */}
                        </Navlink>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>
          : null
        }
      </header>
    </div>
  )
}

export default Navbar
