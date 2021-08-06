import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
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

  const handleToggle = () => {
    setOpen((prevOpen) => {
      onMenuOpen(menuRef)
      return !prevOpen
    });
  };


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
  )
}

export default ToggleMenu