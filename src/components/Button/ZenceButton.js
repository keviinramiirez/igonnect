import React from 'react'
import './ZenceButton.css'
import { Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { checkButtonSize, paletteColors, themeShape } from '../Util'

export const ZenceButton = ({
  children,
  buttonVariant,
  buttonColor,
  onClick
}) => {
  const igonnectTheme = createMuiTheme({
    palette: {
      primary: paletteColors.defaultPrimary,
      secondary: paletteColors.defaultSecondary
    },
    shape: themeShape,
    size: 'large',
  });

  const materialButtonSize = () => {
    const buttonSize = checkButtonSize()
    if (buttonSize === 'size__small' || buttonSize === 'size__xsmall')
      return 'small'
    if (buttonSize === 'size__medium')
      return 'medium'
    return 'large'
  }

  const checkLabelColor = () => {
    return (buttonVariant === 'outlined' || buttonColor === 'secondary') ? 'color__white' : ''
  }

  return (
    <div>
      <ThemeProvider theme={igonnectTheme}>
        <div className={`${checkButtonSize()} ${checkLabelColor()}`} style={{ display: 'inline' }}>
          <Button
            variant={buttonVariant}
            color={buttonColor}
            onClick={onClick}
            size={materialButtonSize()}
          // className={checkLabelColor()}
          >
            {children}
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default ZenceButton;

