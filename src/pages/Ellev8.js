import React from 'react'
import Ellev8Hero from './Ellev8Components/Ellev8Hero'

function Ellev8({ isMobile, click }) {
  console.log(isMobile, click)
  return (
    <>
      {/* {(click) */}
      {(isMobile && click)
        ? null
        : <>
          <Ellev8Hero />
        </>
      }
    </>
  )
}

export default Ellev8
