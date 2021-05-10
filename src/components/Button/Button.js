import React from 'react'
import './Button.css'
import { Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { checkButtonSize, paletteColors, themeShape } from './material-ui'
import {
  isPathSkintech,
  isPathIgo,
  isPathBillGenius,
} from '../Util'

const ZenceButton = ({
  children,
  buttonVariant,
  buttonColor,
  onClick
}) => {
  const checkPalette = () => {
    let primary = paletteColors.defaultPrimary
    let secondary = paletteColors.defaultSecondary
    if (isPathIgo()) {
      primary = paletteColors.igoPrimary
      secondary = paletteColors.igoSecondary
    }
    else if (isPathSkintech()) {
      primary = paletteColors.skintechPrimary
      secondary = paletteColors.skintechSecondary
    }
    else if (isPathBillGenius()) {
      primary = paletteColors.billPrimary
      secondary = paletteColors.billSecondary
    }

    return { primary, secondary }
  }

  const igonnectTheme = createMuiTheme({
    palette: checkPalette(),
    shape: themeShape,
  });

  const isWhiteLabelColor = () => {
    if (isPathSkintech())
      return ''
    return (buttonVariant === 'outlined' || buttonColor === 'secondary') ? 'color__white' : ''
  }

  return (
    <div>
      <ThemeProvider theme={igonnectTheme}>
        <div className={`${checkButtonSize()} ${isWhiteLabelColor()}`} style={{ display: 'inline' }}>
          <Button
            variant={buttonVariant}
            color={buttonColor}
            onClick={onClick}
            size={checkButtonSize()}
          >
            {children}
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default ZenceButton;








// import React from 'react'
// import './Button.scss'
// import {
//   isPathIgo,
//   isPathZence,
//   isPathBillGenius,
//   isPathJoin,
//   checkButtonSize,
//   checkIgoButtonSize,
//   checkBillButtonSize
// } from '../Util'


// const COLOR = [
//   'color__white',
//   'color__black',
//   'color__primary',
//   'color__secondary',
//   'color__primary_igo',
//   'color__secondary_igo',
// ];

// const BORDER = [
//   'border__secondary',
//   'border__primary',
//   'border__bill_blue',
//   'border__bill_green',
//   'border__primary_igo',
//   'border__secondary_igo'
// ]

// const STYLES = [
//   'style__transparent',
//   'style__primary',
//   'style__primary_bill',
//   'style__primary_igo',
//   'style__secondary',
//   'style__secondary_bill',
// ];

// const SIZES = [
//   'size__small',
//   'size__medium',
//   'size__large',
//   'size__xlarge',
//   'size__navbar'
// ];

// const HOVER = [
//   'hover__white',
//   'hover__black',
//   'hover__primary',
//   'hover__primary_igo',
//   'hover__primary_bill',
//   'hover__secondary',
//   'hover__secondary_igo',
//   'hover__secondary_bill',
// ]

// const EFFECT = [
//   'effect__move_y'
// ]

// const Button = ({
//   children,
//   onClick,
//   buttonSize,
//   buttonStyle,
//   buttonBorder,
//   buttonColor,
//   buttonHover,
//   buttonEffect,
// }) => {
//   const buttonSizeByPath = () => {
//     if (isPathBillGenius()) {
//       return checkBillButtonSize();
//     }
//     else if (isPathIgo()) {
//       return checkIgoButtonSize();
//     }
//     else if (isPathZence()) {
//       return checkButtonSize();
//     }
//     else
//       return checkButtonSize();
//   }

//   let checkSize = SIZES.includes(buttonSize)
//     ? buttonSize
//     : buttonSizeByPath()

//   const checkStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   let checkBorder = BORDER.includes(buttonBorder)
//     ? buttonBorder
//     : STYLES[0];

//   let checkColor = COLOR.includes(buttonColor)
//     ? buttonColor
//     : COLOR[0];

//   let checkHover = HOVER.includes(buttonHover)
//     ? buttonHover
//     : STYLES[0];

//   const checkEffect = EFFECT.includes(buttonEffect)
//     ? buttonEffect
//     : '';




//   const buttonResize = () => {
//     if (window.innerWidth <= 1024) {
//       checkSize = 'size__medium'
//     }
//   }



//   const button = () => {
//     if (isPathBillGenius()) {
//       checkBorder = 'border__primary_bill';
//       checkColor = 'color__black'
//       checkHover = 'hover__primary_bill'
//     }
//     else if (isPathJoin()) {
//       checkBorder = 'border__primary_join';
//       checkColor = 'color__black'
//       checkHover = 'hover__primary_join'
//     }

//     return (
//       <button
//         className={`btn ${checkSize} ${checkStyle} ${checkBorder} ${checkColor} ${checkHover} ${checkEffect}`}
//         onClick={onClick}
//       >
//         {children}
//       </button>
//     )
//   }

//   window.addEventListener('resize', buttonResize);

//   return (
//     <div>
//       {button()}
//     </div>
//   )
// }

// export default Button;