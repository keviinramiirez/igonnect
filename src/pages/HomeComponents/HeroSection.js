import React from 'react'
import { Button } from '../../components/Button/Button'
import './HeroSection.scss'
import GoDiamondVideo from '../../assets/videos/go-diamond-cancun-tease.mp4'

function HeroSection({ toScroll }) {
  return (
    <div className='hero__wrapper'>
      <video autoPlay='autoplay' playsInline='playsinline' loop muted style={{ pointerEvents: 'none' }}>
        <source src={GoDiamondVideo} type='video/mp4' />
      </video>
      <div className='hero__innerWrapper'>
        <div className='hero__content'>
          <p>
            <span className='succeed'>Succeed</span>
            <span className='without-selling'>without selling</span>
          </p>
          <p>
            <span className='build-your'>Build your</span>
            <span className='legacy'>legacy</span>
          </p>
        </div>
        <div className='hero__btns'>
          <Button
            buttonStyle='style__transparent'
            buttonBorder='border__secondary'
            buttonColor='color__secondary'
            buttonHover='hover__secondary'
            onClick={toScroll}
          >
            About Me
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
