import { desktop, tablet, lgphone, phone } from '../breakpoints/MediaBreakpoint'

export const isPathIgo = () => (window.location.pathname === '/igo');
export const isPathZence = () => (window.location.pathname === '/zence');
export const isPathBillGenius = () => (window.location.pathname === '/billgenius');
export const isPathVibeRides = () => (window.location.pathname === '/viberides');
export const isPathJoinMe = () => (window.location.pathname === '/joinme');

export const checkButtonSize = () => {
  let innerWidth = window.innerWidth;
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