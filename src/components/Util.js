import { desktop, tablet, lgphone, phone } from '../breakpoints/MediaBreakpoint'

export const isPathHome = () => (window.location.pathname === '/');
export const isPathIgo = () => (window.location.pathname === '/igo');
export const isPathZence = () => (window.location.pathname === '/zence');
export const isPathBillGenius = () => (window.location.pathname === '/billgenius');
export const isPathVibeRides = () => (window.location.pathname === '/viberides');
export const isPathJoin = () => (window.location.pathname === '/join');

export const navShadeWhite = () => {
  // console.log('navShadeWhite')
  // if (isPathHome() || isPathIgo() || isPathZence() || isPathBillGenius()) {

  // }
  if (isPathBillGenius())
    return false
  return true
}

export const checkButtonSize = () => {
  let innerWidth = window.innerWidth;
  // console.log(innerWidth <= phone, innerWidth <= lgphone, innerWidth <= desktop)
  if (innerWidth <= phone)
    return 'size__xsmall'
  else if (innerWidth <= lgphone)
    return 'size__small'
  else if (innerWidth <= desktop)
    return 'size__medium'
  else
    return 'size__large'
}

export const checkIgoButtonSize = () => {
  let innerWidth = window.innerWidth;
  if (innerWidth <= phone)
    return 'size__xsmall'
  else if (innerWidth <= lgphone)
    return 'size__small'
  else if (innerWidth <= tablet) {
    return 'size__medium'
  }
  else if (innerWidth <= desktop)
    return 'size__large'
  else
    return 'size__xlarge'
}

export const checkBillButtonSize = () => {
  let innerWidth = window.innerWidth;
  if (innerWidth <= phone)
    return 'size__small'
  else if (innerWidth <= lgphone)
    return 'size__medium'
  else if (innerWidth <= desktop)
    return 'size__large'
  else
    return 'size__large'
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


export const checkLinkText = () => {
  // console.log('history.location', history.location)
  // setLocation(history.location)
  // setLocation(history.location)

  console.log('checkLinkText')
  if (window.innerWidth <= lgphone)
    return '-white'
  // console.log('checkLinkText()', whiteNavColorShade)
  // return whiteNavColorShade ? '-black' : '-white'

  console.log('window.location.pathname', window.location.pathname)

  return (isPathBillGenius() || isPathJoin())
    ? '-black'
    : '-white'
  // return isWhiteNavShade ? '-white' : '-black'
}