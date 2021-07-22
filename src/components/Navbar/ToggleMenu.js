import React, { useRef, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
// import Button from '../Button/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { isPathSkintech, isPathBillGenius, isPathIDecide, isPathJoin } from '../Util'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//     },
//     paper: {
//       marginRight: theme.spacing(2),
//     },
//   }));

const checkLinkText = () => {
  // if (window.innerWidth <= lgphone)
  //   return '-white'
  // console.log('checkLinkText()')
  return (isPathSkintech() || isPathBillGenius() || isPathIDecide() || isPathJoin())
    ? 'black'
    : 'white'
}
 
function ToggleMenu({ title, Icon, onMenuOpen, menuRef }) {
  const [open, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState(checkLinkText())
  // const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => { 
      onMenuOpen(menuRef)
      return !prevOpen
    });
  };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  useEffect(() => {//eslint-disable-line
    console.log('useEffect', buttonColor)
    setButtonColor(checkLinkText())
  })
  
  return (
    <div className='toggleMenu' ref={menuRef}>
      <Button
        style={{ color: buttonColor }}
        className='toggleMenu__button'
        endIcon={Icon}
        onClick={handleToggle}
      >
        {title}
      </Button>
    </div>
    // <div className={classes.root}>
    // <Button
    //   ref={anchorRef}
    //   aria-controls={open ? 'menu-list-grow' : undefined}
    //   aria-haspopup="true"
    //   onClick={handleToggle}
    // >
    //   Toggle Menu Grow
    // </Button>
    // <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
    //   {({ TransitionProps, placement }) => (
    //     <Grow
    //       {...TransitionProps}
    //       style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
    //     >
    //       <Paper>
    //         <ClickAwayListener onClickAway={handleClose}>
    //           <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
    //             {menuItems.map((item) => {
    //                 return (
    //                     <MenuItem onClick={handleClose}>{item.title}</MenuItem>
    //                 )
    //             })}
    //             {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
    //             <MenuItem onClick={handleClose}>My account</MenuItem>
    //             <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    //           </MenuList>
    //         </ClickAwayListener>
    //       </Paper>
    //     </Grow>
    //   )}
    // </Popper>
    // </div>
  )
}

export default ToggleMenu