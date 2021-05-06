import React from 'react'
import './BButton.css'
import { Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { checkButtonSize, paletteColors, themeShape } from '../Util'



export const BButton = ({
  children,
  buttonVariant,
  buttonColor,
  onClick
}) => {

  const igonnectTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#f7e888',
        main: '#F5E051',
        dark: '#f3d617',
        contrastText: '#000',
      },
      secondary: {
        light: '#a85fd3',
        main: '#8529b9',
        dark: '#760cb4',
        contrastText: '#fff',
      },
    },
    shape: {
      borderRadius: 100,
      padding: 10
    },
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
          >
            {children}
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default BButton;

