import React, { useState, useEffect } from 'react'
import './ScrollToTop.scss'
import { useWindowScroll } from 'react-use'

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 1500) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (!visible) {
    return false;
  }
  return (
    <div className='scrollToTop' onClick={scrollToTop}>
      <i className='icon fas fa-chevron-up'></i>
    </div>
  )
}

export default ScrollToTop
