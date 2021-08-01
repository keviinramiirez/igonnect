import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Navbar.css'
import ToggleMenu from './ToggleMenu'
import IgonnectWhiteSvg from '../../assets/SVG/igonnect_logo_white2.svg'
import IgonnectBlackSvg from '../../assets/SVG/igonnect_logo_black2.svg'
import Navlink from './Navlink'
import { isPathSkintech, isPathBillGenius, isPathIDecide, isPathJoin } from '../Util'
import { desktop, tablet, lgphone } from '../../breakpoints/MediaBreakpoint'

const services = [{
  title: 'iGo',
  mobileTitle: 'iGo 4 less',
  path: '/igo',
  isFree: true
}, {
  title: 'Bill Genius',
  path: '/billgenius',
  isFree: true
}, {
  title: 'Ellev8',
  path: '/ellev8',
  isFree: false
}]

const products = [{
  title: 'Zence',
  path: '/zence'
}, {
  title: 'SkinTech',
  path: '/skintech'
}]

function Navbar({ click, handleClick, showRegularNavbar, showButton, closeMobileMenu }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  const blackNavColor = () => {
    return isPathSkintech() || isPathBillGenius() || isPathIDecide() || isPathJoin()
  }

  const checkLogoSize = () => {
    let innerWidth = window.innerWidth;
    let width = 200, height = 200;
    // if (innerWidth <= phone)
    //   width = height = 120;
    // else 
    if (innerWidth <= lgphone)
      width = height = 140;
    else if (innerWidth <= tablet)
      width = height = 150;
    else if (innerWidth <= desktop)
      width = height = 170;

    return <img
      className='navbar__logo'
      src={blackNavColor() ? IgonnectBlackSvg : IgonnectWhiteSvg}
      width={width}
      height={height}
      alt='igonnect logo'
    />
  }

  const closeMenuItems = () => {
    if (isServicesOpen || isProductsOpen) {
      if (isServicesOpen)
        setIsServicesOpen(false)
      else if (isProductsOpen)
        setIsProductsOpen(false)
    }
  }

  const handleServicesRef = () => {
    setIsServicesOpen(true)
    setIsProductsOpen(false)
  }

  const handleProductsRef = () => {
    setIsServicesOpen(false)
    setIsProductsOpen(true)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100vh',
      flexDirection: 'column',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      zIndex: '1',
      borderRadius: '1px'
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div
        className='navbar'
        style={click ? {
          backgroundColor: '#242222',
          height: (window.outerHeight + 'px'),
          overflow: 'hidden',
          top: '0'
        }
          : {}
        }>
        {isServicesOpen &&
          <div className='navbar__items'
            style={{ top: (servicesRef?.current.offsetTop + servicesRef?.current.offsetHeight), left: servicesRef?.current.offsetLeft + 7 }}>
            <Paper>
              <MenuList onClick={closeMenuItems}>
                {services.map(serviceItem => {
                  let topPos = (serviceItem.title === 'iGo') ? 10 : 50;
                  return (
                    <Navlink
                      key={serviceItem.title}
                      path={serviceItem.path}
                      onClick={closeMobileMenu}
                    >
                      <MenuItem>{serviceItem.title}</MenuItem>
                      {/* <p className='navbar__label' style={{ top: labelTop }}>free</p> */}
                      {serviceItem.isFree && <p className='navbar__label' style={{ top: topPos }}>free</p>}
                    </Navlink>
                  )
                })}
              </MenuList>
            </Paper>
          </div>
        }
        {isProductsOpen &&
          <div className='navbar__items'
            style={{ top: (productsRef?.current.offsetTop + productsRef?.current.offsetHeight), left: productsRef?.current.offsetLeft + 7 }}>
            <Paper>
              <MenuList onClick={closeMenuItems}>
                {products.map(serviceItem => (
                  <Navlink
                    key={serviceItem.title}
                    path={serviceItem.path}
                    onClick={closeMobileMenu}
                  >
                    <MenuItem>{serviceItem.title}</MenuItem>
                  </Navlink>
                ))}
              </MenuList>
            </Paper>
          </div>
        }
        <header>
          {
            click ?
              <div
                className='navbar__menuIcon navbar__menuIconTimes'
                onClick={() => handleClick()}>
                <i className={'fas fa-times'} style={{ color: 'white' }} />
              </div>
              :
              <div className='navbar__logoBars'>
                <div className='navbar__logo' onClick={closeMenuItems}>
                  <Navlink path='/' onClick={closeMobileMenu}>
                    {checkLogoSize()}
                  </Navlink>
                </div>
                <div
                  className='navbar__menuIcon navbar__menuIconBars'
                  onClick={() => handleClick()}
                  style={{ color: (blackNavColor() && !click) ? 'black' : 'white' }}
                >
                  <i className={'fas fa-bars'} />
                </div>
              </div>
          }
          {(!click && showRegularNavbar) && (
            <nav>
              <ul className='navbar__links'>
                <li onClick={() => closeMenuItems()}>
                  <ToggleMenu
                    title='services'
                    menuItems={services}
                    onMenuOpen={handleServicesRef}
                    menuRef={servicesRef}
                    Icon={isServicesOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />} />
                </li>
                <li onClick={() => closeMenuItems()}>
                  <ToggleMenu
                    title='products'
                    menuItems={services}
                    onMenuOpen={handleProductsRef}
                    menuRef={productsRef}
                    Icon={isProductsOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />} />
                </li>
              </ul>
            </nav>
          )}
        </header>
      </div>
      {(click && !showRegularNavbar) && (
        <div style={{ marginTop: '4em', overflow: 'hidden' }}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={<ListSubheader component="div" id="nested-list-subheader">Services</ListSubheader>}
            className={classes.root}>
            {services.map((service) => {
              return (
                <Navlink
                  key={service.title}
                  path={service.path}
                  isMobile={true}
                  onClick={closeMobileMenu}
                >
                  <ListItem button>
                    <ListItemText
                      primary={service.mobileTitle ? service.mobileTitle : service.title}
                      style={{ fontSize: '2.6em !important' }}
                    />
                    {service.isFree && <p className='navbar__label' style={{ top: 0, left: 20, fontSize: '10px' }}>free</p>}
                  </ListItem>
                </Navlink>
              )
            })}
          </List>
          <hr />
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={<ListSubheader component="div" id="nested-list-subheader">Products</ListSubheader>}
            className={classes.root}>
            {products.map(product => (
              <Navlink
                key={product.title}
                path={product.path}
                isMobile={true}
                onClick={closeMobileMenu}
              >
                <ListItem button>
                  <ListItemText
                    primary={product.mobileTitle ? product.mobileTitle : product.title}
                    style={{ fontSize: '2.6em !important' }}
                  />
                </ListItem>
              </Navlink>
            ))}
          </List>
        </div>
      )}
    </>
  )
}

export default Navbar
