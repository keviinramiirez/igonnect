import React from 'react'
import ZenceHeroSection from './ZenceComponents/ZenceHeroSection'

function Zence({ isMobile, click }) {
  return (
    <>
      {(isMobile && click)
        ? null
        : <>
          <ZenceHeroSection />
        </>
      }
    </>
  )
}

export default Zence
