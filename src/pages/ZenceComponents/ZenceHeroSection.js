


import React, { useState } from 'react'
import './ZenceHeroSection.scss'
import { desktop, tablet, lgphone, phone } from '../../breakpoints/MediaBreakpoint'

import ZenceBackSvg from '../../assets/SVG/purple-neon.svg'
import ZenceLavenderSvg from '../../assets/SVG/zence_lavender.svg'
import ZenceEucalyptusSvg from '../../assets/SVG/zence_eucalyptus.svg'
import ZenceLemonSvg from '../../assets/SVG/zence_lemon.svg'
import ZenceBackVerticalSvg from '../../assets/SVG/purple-neon-vertical.svg'
import ZenceLavenderVerticalSvg from '../../assets/SVG/zence_lavender_vertical.svg'
import ZenceEucalyptusVerticalSvg from '../../assets/SVG/zence_eucalyptus_vertical.svg'
import ZenceLemonVerticalSvg from '../../assets/SVG/zence_lemon_vertical.svg'

import Button from '../../components/Button/Button'
// import VideoModal from '../../components/Modal/VideoModal'
import VideoCard from './VideoCard'

function ZenceHeroSection() {
  const [rotateSvgs, setRotateSvgs] = useState(window.innerWidth > 768)
  const [videoIsShown, setVideoIsShown] = useState(false)

  const showVideoHandler = () => {
    setVideoIsShown(true)
  }
  const hideVideoHandler = () => {
    setVideoIsShown(false)
  }

  const isTabletSize = () => {
    setRotateSvgs(window.innerWidth > 768)
  }

  window.addEventListener('resize', isTabletSize);

  function zenceSvgs() {
    return (
      <div className='zence__img'>
        <img src={rotateSvgs ? ZenceBackSvg : ZenceBackVerticalSvg} alt='Zence Background' />
        <img src={rotateSvgs ? ZenceLemonSvg : ZenceLemonVerticalSvg} className='lemon' alt='Zence Lemon' />
        <img src={rotateSvgs ? ZenceLavenderSvg : ZenceLavenderVerticalSvg} className='lavender' alt='Zence Lavender' />
        <img src={rotateSvgs ? ZenceEucalyptusSvg : ZenceEucalyptusVerticalSvg} className='eucalyptus' alt='Zence Eucalyptus' />
      </div>
    )
  };

  const buttonView = (cssClass) => (
    <div className={cssClass}>
      <div style={{ marginRight: '1em', }}>
        <Button
          buttonVariant='outlined'
          buttonColor='primary'
          onClick={() => window.open("https://izence.com/", "_blank")}
        >
          Learn More
        </Button>
      </div>
      <div>
        <Button
          buttonVariant='contained'
          buttonColor='secondary'
          onClick={() => showVideoHandler(true)}
        >
          Watch Video
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {zenceSvgs()}
      <div className='zence__transHalfBlack'>
        <div className='zence__heroContentWrapper'>
          <div className='zence__heroContent'>
            <div className='zence__heroTitle'>
              <p className='wearable'>Wearable</p>
              <p className='technology'>Technology</p>
            </div>
            <div className='zence__heroSubtitle'>
              <p>
                Your own Personal, Portable, and Powerful <br />
                <span>Mood Enhancer </span>
                with Essential Oils.
              </p>
            </div>
            {window.innerWidth > 768 && buttonView('zence__buttons')}
            {videoIsShown && (
              <VideoCard
                videoIsShown={videoIsShown}
                onClose={hideVideoHandler}
              />
            )}
          </div>
        </div>
      </div>
      {/* on mobile, need to keep it outside above overlays */}
      {window.innerWidth <= 768 && (
        buttonView('zence__mobileButtons')
      )}
    </>
  )
}

export default ZenceHeroSection





























































//    ---------------- GRADIENT BORDER EFFECT ----------------
// import React, { useState } from 'react'
//   return (
//     <div div className='zence__wrapper' >
//           {/* <div className='zence__box'> */}
//           <div className='zence__box' par='What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?'>
//         <div className='content'>
//           <h1>Gorwing Border</h1>
//           <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default ZenceHeroSection