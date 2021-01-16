import React from 'react'
import JoinHero from './JoinComponents/JoinHero'

function Join({ isMobile, click }) {
  return (
    <>
      {(isMobile && click)
        ? null
        : <>
          <JoinHero />
        </>
      }
    </>
  )
}

export default Join
