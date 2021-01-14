import React from 'react'
// import ContactMeHeroSection from './JoinMeComponents/ContactMeHeroSection'
import JoinMeHero from './JoinMeComponents/JoinMeHero'

function JoinMe({ isMobile, click }) {
  return (
    <>
      {(isMobile && click)
        ? null
        : <>
          {/* <ContactMeHeroSection /> */}
          <JoinMeHero />
        </>
      }
    </>
  )
}

export default JoinMe
