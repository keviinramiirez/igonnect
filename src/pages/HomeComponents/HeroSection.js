import React from 'react'
import './HeroSection.scss'
import Button from '../../components/Button/Button'
import SonarButton from '../../components/Button/SonarButton'
import GoDiamondVideo from '../../assets/videos/go-diamond-cancun-tease.mp4'
import { useHistory } from 'react-router-dom'
import HomeBackground from '../../assets/home-back.jpeg'

function HeroSection({ closeMobileMenu }) {
  const history = useHistory()

  const toChangeNavbarColor = () => {
    closeMobileMenu() //causes navbar to rerender
    history.push('/idecide')
  }

  const goToPoweredByIgo = () => {
    window.open("https://poweredbyigo.com/igo/TSA5861509", "_blank")
  }

  return (
    <div className='hero__wrapper'>
      {/* <video autoPlay='autoplay' playsInline='playsinline' loop muted style={{ pointerEvents: 'none' }}>
        <source src={GoDiamondVideo} type='video/mp4' />
      </video> */}
      {window.innerWidth > 425 ? (
        <video autoPlay='autoplay' playsInline='playsinline' loop muted style={{ pointerEvents: 'none' }}>
          <source src={GoDiamondVideo} type='video/mp4' />
        </video>)
        : <img src={HomeBackground} alt='hero background' />}
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
        <div className='hero__buttons'>
          <div style={{ marginRight: '1em', }}>
            <Button
              buttonVariant='outlined'
              buttonColor='primary'
              onClick={toChangeNavbarColor}>
              Interact
            </Button>
          </div>
          <SonarButton
            text='POWERED BY IGO'
            onClick={goToPoweredByIgo}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
