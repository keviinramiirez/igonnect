import React from 'react'
import IgoHomeSection from './IGoComponents/IgoHomeSection'

function IGo({ isMobile, click }) {
  console.log(isMobile, click)
  return (
    <>
      {/* {(click) */}
      {(isMobile && click)
        ? null
        : <>
          <IgoHomeSection />
        </>
      }
    </>
  )
}

export default IGo
