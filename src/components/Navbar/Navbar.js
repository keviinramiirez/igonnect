import React, { useState, useRef } from 'react'
import './Navbar.css'
import ToggleMenu from './ToggleMenu'
import IgonnectWhiteSvg from '../../assets/SVG/igonnect_logo_white2.svg'
import IgonnectBlackSvg from '../../assets/SVG/igonnect_logo_black2.svg'
import Button from '../Button/Button'
import Navlink from './Navlink'
import { navHeaders } from './navHeaders'
import { isPathSkintech, isPathBillGenius, isPathIDecide, isPathJoin } from '../Util'
import { desktop, tablet, lgphone, phone } from '../../breakpoints/MediaBreakpoint'
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { CssBaseline } from '@material-ui/core'

const services = [{
  title: 'iGo',
  path: '/igo'
}, {
  title: 'Bill Genius',
  path: '/billgenius'
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
    console.log('handleServicesRef')
    setIsServicesOpen(true)
    setIsProductsOpen(false)
  }

  const handleProductsRef = () => {
    console.log('handleProductsRef')
    setIsServicesOpen(false)
    setIsProductsOpen(true)
  }

  const test = () => {
    console.log('click', click)
    console.log('showRegularNavbar', showRegularNavbar)
    // console.log('click', click)
    
  }
  test()

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
                {services.map(serviceItem => (
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
              <div className='navbar__logo'onClick={closeMenuItems}>
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
        {/* {(click || showRegularNavbar) && ( */}
        {/* {((!click && showRegularNavbar) || (!click && !showRegularNavbar)) && ( */}
        {(!click && showRegularNavbar) && (
          <nav>
            <ul className='navbar__links'>
              {/* {navHeaders.map(({ title, path }) => {
                return (
                  <li key={title} className='navbar__item' style={{ marginLeft: (!click ? '2.5em' : 0) }}>
                    <Navlink
                      path={path}
                      onClick={closeMobileMenu}
                    >
                      {!title.includes('Join') && title}
                    </Navlink>
                  </li>
                )
              })} */}
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
              {/* <li key={'Services'} className='navbar__item' style={{ marginLeft: (!click ? '2.5em' : 0) }}>
                <Navlink
                  path={'/igo'}
                  onClick={closeMobileMenu}
                >
                  {!'iGo'.includes('Join') && 'iGo'}
                </Navlink>
              </li>
              <li key={'Products'} className='navbar__item' style={{ marginLeft: (!click ? '2.5em' : 0) }}>
                <Navlink
                  path={'/skintech'}
                  onClick={closeMobileMenu}
                >
                  {!'SkinTech'.includes('Join') && 'SkinTech'}
                </Navlink>
              </li> */}
            </ul>
          </nav>
        )}
      </header>
    </div>
    {(click && !showRegularNavbar) && (
      <div style={{ marginTop: '4em'}}>
        <List 
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Services
            </ListSubheader>
          }
          className={classes.root}>
          <Navlink
            key={'i Go 4 less'}
            path={'/igo'}
            isMobile={true}
            onClick={closeMobileMenu}
          >
            <ListItem button>
              <ListItemText primary="i Go 4 less" className="test" style={{ fontSize: '2.6em !important' }} />
            </ListItem>
          </Navlink>
          <Navlink
            key={'Bill Genius'}
            path={'/billgenius'}
            isMobile={true}
            onClick={closeMobileMenu}
          >
            <ListItem button>
              <ListItemText primary="Bill Genius" />
            </ListItem>
          </Navlink>
        </List>
        <hr style={{ color: 'white', zIndex: '2000', }} />
        {/* <div style={{ color: 'white', border: 'white 5px solid', zIndex: '3000' }}></div> */}
        <List 
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Products
            </ListSubheader>
          }
          className={classes.root}>
          <Navlink
            key={'Zence'}
            path={'/zence'}
            isMobile={true}
            onClick={closeMobileMenu}
          >
            <ListItem button>
              <ListItemText primary="Zence" />
            </ListItem>
          </Navlink>
          <Navlink
            key={'Skin Tech'}
            path={'/skintech'}
            isMobile={true}
            onClick={closeMobileMenu}
          >
            <ListItem button>
              <ListItemText primary="Skin Tech" />
            </ListItem>
          </Navlink>
        </List>
      </div>
    )}
    </>
  )
}

export default Navbar
