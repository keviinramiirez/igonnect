


import React, { useState } from 'react'
import './ZenceHeroSection.scss'
import { makeStyles } from '@material-ui/core/styles'
import { desktop, tablet, lgphone, phone } from '../../breakpoints/MediaBreakpoint'

import ZenceBackSvg from '../../assets/SVG/purple-neon.svg'
import ZenceLavenderSvg from '../../assets/SVG/zence_lavender.svg'
import ZenceEucalyptusSvg from '../../assets/SVG/zence_eucalyptus.svg'
import ZenceLemonSvg from '../../assets/SVG/zence_lemon.svg'
import ZenceBackVerticalSvg from '../../assets/SVG/purple-neon-vertical.svg'
import ZenceLavenderVerticalSvg from '../../assets/SVG/zence_lavender_vertical.svg'
import ZenceEucalyptusVerticalSvg from '../../assets/SVG/zence_eucalyptus_vertical.svg'
import ZenceLemonVerticalSvg from '../../assets/SVG/zence_lemon_vertical.svg'

import { Button } from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import Nav from '../../components/Navbar/Nav'

function ZenceHeroSection() {
  const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [rotateSvgs, setRotateSvgs] = useState(window.innerWidth > 768)

  const isTabletSize = () => {
    setRotateSvgs(window.innerWidth > 768)
  }
  // const checkButtonSize = () => {
  //   console.log('checkButtonSize')
  //   let innerWidth = window.innerWidth;
  //   if (innerWidth <= phone) {
  //     setButtonSize('size__small')
  //   }
  //   else if (innerWidth <= lgphone) {
  //     setButtonSize('size__small')
  //   }
  //   else if (innerWidth <= tablet) {
  //     setButtonSize('size__medium')
  //   }
  //   else if (innerWidth <= desktop) {
  //     setButtonSize('size__large')
  //   }
  // }

  // const checkButtonSize = () => {
  function checkButtonSize() {
    let innerWidth = window.innerWidth;
    if (innerWidth <= phone)
      return 'size__small'
    else if (innerWidth <= lgphone)
      return 'size__small'
    else if (innerWidth <= tablet)
      return 'size__medium'
    else if (innerWidth <= desktop)
      return 'size__large'
  }



  window.addEventListener('resize', isTabletSize);
  window.addEventListener('resize', checkButtonSize);

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

  return (
    <div className='zence__wrapper'>
      {zenceSvgs()}
      {/* <div style={{ position: 'absolute', opacity: '0.7', width: '50%', height: '100vh', top: '0', left: '0', zIndex: -1, backgroundColor: 'black' }}> */}
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
            <div className='zence__buttons'>
              <div style={{ marginRight: '1em', }}>
                <Button
                  // buttonSize='size__large'
                  // buttonSize={buttonSize}
                  // checkButtonSize={checkButtonSize}
                  buttonStyle='style__transparent'
                  buttonBorder='border__secondary'
                  buttonColor='color__secondary'
                  buttonHover='hover__secondary'
                  // href='true'
                  onClick={() => window.open("https://izence.com/", "_blank")}
                >
                  Learn More
                </Button>
              </div>
              <div style={BUTTON_WRAPPER_STYLES}>
                <Button
                  // buttonSize={buttonSize}
                  buttonStyle='style__primary'
                  buttonBorder='border__primary'
                  buttonColor='color__white'
                  buttonHover='hover__secondary'
                  onClick={() => setModalOpen(true)}
                >
                  Watch Video
                </Button>

                <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                  <div className='zence__iframeContainer'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tucWP9pkibQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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