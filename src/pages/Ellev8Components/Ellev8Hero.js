import { useState } from 'react'
import './Ellev8Hero.css'
import Ellev8IconSvg from '../../assets/ellev8_trans.png'
// import Ellev8BackSvg from '../../assets/SVG/green_opacity_candlesticks.svg'
import Ellev8BackSvg from '../../assets/SVG/green_opacity_candlesticks_70.svg'
import Button from '../../components/Button/Button'
import VideoCard from '../../components/Modal/VideoCard'
import Ellev8Video from '../../assets/videos/ellev8_countdown4freedom.mp4'

function Ellev8Hero() {
  const [videoIsShown, setVideoIsShown] = useState(false)

  const showVideoHandler = () => {
    setVideoIsShown(true)
  }
  const hideVideoHandler = () => {
    setVideoIsShown(false)
  }

  return (
    <>
      <div className='ellev8'>
        <img className='ellev8__backgroundImg' src={Ellev8BackSvg} alt='Ellev8 Background' />
        {/* <div className='ellev8__img'>
        <img src={Ellev8BackSvg} alt='Ellev8 Background' />
      </div> */}

        <div className='ellev8__content'>
          <img src={Ellev8IconSvg} alt='Ellev8 Icon' />
          <p className='ellev8__header'>FOREX TRADING LEGACY</p>
          <p className='ellev8__subheader'>{(window.innerWidth > 425) ? 'Technology that t' : 'T'}eaches you how to multiply your money</p>
          {/* <p className='ellev8__text'>Exploit the market that moves around <strong>$6.6 trillion per day</strong>!</p> */}
          <p className='ellev8__text'>Exploit the market that moves around <span>$6.6 trillion per day</span></p>

          <div className='ellev8__buttons'>
            <div style={{ marginRight: '1em' }}>
              <Button
                buttonVariant='outlined'
                buttonColor='primary'
                onClick={() => window.open("https://www.ellev8.com/", "_blank")}
              >
                Learn More
              </Button>
            </div>
            <Button
              buttonVariant='contained'
              buttonColor='secondary'
              onClick={() => showVideoHandler(true)}
            >
              Watch Video
            </Button>
            {videoIsShown && (
              <VideoCard
                videoIsShown={videoIsShown}
                onClose={hideVideoHandler}
                VideoLink={Ellev8Video}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Ellev8Hero
