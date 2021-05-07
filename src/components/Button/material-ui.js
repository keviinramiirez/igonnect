import { desktop, lgphone, phone } from '../../breakpoints/MediaBreakpoint'
import { isPathIgo, isPathBillGenius } from '../Util'

export const checkButtonSize = () => {
  let innerWidth = window.innerWidth;
  // console.log(innerWidth <= phone, innerWidth <= lgphone, innerWidth <= desktop)
  if (innerWidth <= phone)
    return 'xsmall'
  else if (innerWidth <= lgphone && !isPathBillGenius())
    return 'small'
  else if (innerWidth <= desktop && !isPathIgo())
    return 'medium'
  else
    return 'large'
}

export const paletteColors = {
  defaultPrimary: {
    light: '#f7e888',
    main: '#F5E051',
    dark: '#f3d617',
    contrastText: '#000',
  },
  defaultSecondary: {
    light: '#a85fd3',
    main: '#8529b9',
    dark: '#760cb4',
    contrastText: '#fff',
  },
  igoPrimary: {
    light: '#ffe56f',
    main: '#e4c01e',
    dark: '#E7AE11',
    contrastText: '#000',
  },
  igoSecondary: {
    light: '#0692d0',
    main: '#004ae9',
    dark: '#003cbe',
    contrastText: '#000',
  },
  billPrimary: {
    light: '#6dffdf',
    main: '#00f5c0',
    dark: '#00bb92',
    contrastText: '#000',
  },
  billSecondary: {
    light: '#55a4ff',
    main: '#2662A7',
    dark: '#0e4f99',
    contrastText: '#fff',
  },
}

export const themeShape = {
  borderRadius: 100,
  padding: 10
}