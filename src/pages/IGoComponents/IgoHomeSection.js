import React from 'react'
import './IgoHomeSection.scss'
import Button from '../../components/Button/Button'
import { lgphone, phone } from '../../breakpoints/MediaBreakpoint'
// import iGoBeachSvg from '../../assets/SVG/beach_vacation.svg'
import iGoBeachSvg from '../../assets/SVG/beach_vacation1.svg'

// import iGoPNG from '../../assets/igo_logo.png'
// import iGoSvg from '../../assets/SVG/igo_trans.svg'

// import { ReactComponent as iGoSvg } from './igo.svg'
// import { ReactComponent as iGoSvg } from '../../assets/SVG/igo_trans.svg'
// import { ReactComponent as iGoSvg } from '../../assets/SVG/igo_trans.svg'
import { ReactComponent as IGoSvg } from '../../assets/SVG/igo_logo.svg'

// import { ReactComponent as BubbleSVG } from '../../assets/SVG/bubble.svg'
// import { ReactComponent as BubblePNG } from '../../assets/SVG/bubble1.png'


function IgoHomeSection() {
  // const [opacity, setopacity] = useState(0)

  // function enable() {
  //   setTimeout(
  //     function () {
  //       setopacity(true)
  //     }, 13000
  //   );
  // }
  // enable();

  function igoLogo() {
    const innerWidth = window.innerWidth;
    let height = '240', width = '240';
    if (innerWidth <= phone)
      height = width = '100';
    else if (innerWidth <= lgphone)
      height = width = '150';
    else if (innerWidth <= 570)
      height = width = '200';
    return (
      <div>
        <IGoSvg height={height} width={width} alt='iGo Logo' />
      </div>
    )
  }

  window.addEventListener('resizing', igoLogo);

  return (
    <div className='igo'>
      <div className='igo__logoBack'>
        <img src={iGoBeachSvg} alt='Beach Circle background' />
      </div>

      {/* <BubbleSVG height='100' width='100' /> */}

      <div className='igo__gridCentralize'>
        <div className='igo__innerWrapper'>
          {igoLogo()}
          <div className='igo__title'>
            Access to <span className='igo__lifetyle'>5-star Lifestyle</span> at 3-star pricing
          </div>
          <div className='igo__subtitle'>
            Ready to travel to the beaches of the world?
          </div>
          <div className='igo__button'>
            <Button
              // className='btns'
              buttonVariant='contained'
              buttonColor='primary'
              onClick={() => window.open("https://home.ibuumerang.com/igo/", "_blank")}
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* <div className='igo__bubbles' style={{ opacity: opacity }}>
          <BubbleSVG className='igo__bubble' height='80' width='80' alt='iGo Logo' />
          <BubbleSVG className='igo__bubble' height='80' width='80' alt='iGo Logo' />
          <BubbleSVG className='igo__bubble' height='80' width='80' alt='iGo Logo' />
          <BubbleSVG className='igo__bubble' height='80' width='80' alt='iGo Logo' />
          <BubbleSVG className='igo__bubble' height='80' width='80' alt='iGo Logo' />
        </div> */}
      </div>


      {/* <svg width='100' height='100'> */}
      {/* <img src={TestSVG} width='100' height='100' alt='Beach Circle background' /> */}
      {/* <iGoSVG width='100' height='100' alt='iGo Logo' /> */}
      {/* </svg> */}


      {/* <svg height='600' width='600' > */}
      {/* <img src={iGoPNG} height='600' width='600' style={{ zIndex: '100', margin: 'auto 0' }} alt="React Logo" /> */}
      {/* <iGoSvg height='600' width='600' alt='iGo Logo' /> */}
      {/* </svg> */}
      {/* <img src={iGoSvg} className='igo__logo' alt='iGo Logo' /> */}
      {/* <div className='igo__bubbles'> */}
      {/* <svg height='300' width='300'> */}
      {/* <TestSVG height='300' width='300' alt='iGo Logo' /> */}
      {/* </svg> */}
      {/* <img src={iGoSVG} className='igo__logo' alt='Beach Circle background' /> */}

      {/* </div> */}
    </div>
  )
}

export default IgoHomeSection
