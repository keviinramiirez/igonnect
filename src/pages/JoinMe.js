import React from 'react'
import JoinMeHero from './JoinMeComponents/JoinMeHero'

function JoinMe({ isMobile, click }) {
  return (
    <>
      {(isMobile && click)
        ? null
        : <>
          <JoinMeHero />
        </>
      }
    </>
  )
}

export default JoinMe
