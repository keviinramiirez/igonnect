import React from 'react'
import './Button.css'
import { Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { checkButtonSize, paletteColors, themeShape } from './material-ui'
import {
  isPathSkintech,
  isPathIgo,
  isPathBillGenius,
  isPathEllev8
} from '../Util'

const ZenceButton = ({
  children,
  buttonVariant,
  buttonColor,
  onClick,
  isPoweredByIgo
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
    else if (isPathEllev8()) {
      primary = paletteColors.ellev8Primary
      secondary = paletteColors.ellev8Primary
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
    <>
      {isPoweredByIgo && <button type="submit" class="glowButton" onClick={onClick}>{children}</button>}
      {!isPoweredByIgo &&
        <ThemeProvider theme={igonnectTheme}>
          <div className={`${checkButtonSize()} ${isWhiteLabelColor()}`} style={{ display: 'inline' }}>
            <Button
              variant={buttonVariant}
              color={buttonColor}
              onClick={onClick}
              size={checkButtonSize()}
              className={isPathEllev8() ? 'blackText' : ''}
            >
              {children}
            </Button>
          </div>
        </ThemeProvider>
      }
    </>
  );
}

export default ZenceButton;
