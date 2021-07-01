import React from 'react'
import Button from '../../components/Button/Button'
import './HeroSection.scss'
import GoDiamondVideo from '../../assets/videos/go-diamond-cancun-tease.mp4'
import { useHistory } from 'react-router-dom'

function HeroSection({ toScroll, closeMobileMenu }) {
  const history = useHistory()

  const toChangeNavbarColor = () => {
    closeMobileMenu() //causes navbar to rerender
    history.push('/idecide')
  }

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
        <div className='hero__buttons'>
          <div style={{ marginRight: '1em', }}>
            <Button
              buttonVariant='outlined'
              buttonColor='primary'
              onClick={toScroll}
            >
              About Me
            </Button>
          </div>
          <Button
            buttonVariant='contained'
            buttonColor='secondary'
            onClick={toChangeNavbarColor}
          >
            Interact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection