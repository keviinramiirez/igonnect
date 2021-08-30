import React from 'react'
import './PribSection.scss'
// import PribImg from './prib_transparent_cropped.png';
// import PribImg from '../../assets/prib_transparent_cropped.png';
// import PribPng from '../../assets/prib_trans.png'
// import PribPng from '../../assets/prib.PNG'
import PribPng from '../../assets/prib_transparent.PNG'
import { lgphone, tablet, desktop, heroVideoCutout } from '../../breakpoints/MediaBreakpoint'

function PribSection() {
  const pribPng = () => {
    const innerWidth = window.innerWidth;
    // let width = 1350, height = 679;
    let width = 600, height = 301.77;

    if (innerWidth <= 350) {
      width -= 350; height -= 176.03;
    }
    else if (innerWidth <= lgphone) {
      width -= 270; height -= 135.79;
    }
    else if (innerWidth <= 660) {
      // width -= 380; height -= 191.11;
      width -= 250; height -= 125.73;
    }
    else if (innerWidth <= 720) {
      width -= 350; height -= 176.03;
    }
    else if (innerWidth <= tablet) {
      width -= 300; height -= 160;
    }
    else if (innerWidth <= desktop) {
      width -= 200; height -= 100.62;
    }
    else if (innerWidth <= heroVideoCutout) {
      // width -= 100; height -= 50.39;
      width -= 50; height -= 25;
    }


    // return <PribSvg height={height} width={width} viewBox="0 -100 1413 1172" alt='Prib Illustration' />
    // return <img src={PribSvg} width={width} height={height} alt='Prib Illustration' />
    return <img src={PribPng} width={width} height={height} alt='Prib Illustration' />
  }

  return (
    <div className='prib__wrapper' style={{ marginBottom: '-10px' }}>
      <div className='prib__innerWrapper'>
        <div className='prib__left'>
          {pribPng()}
        </div>
        <div className='prib__right'>
          <div className='prib__context'>
            <h1>
              <p className='prib__thePribContainer'>
                <span className='the'>THE</span>
                <span className='prib'>PRIB</span>
              </p>
            </h1>
            <div className='prib__subtitle'>
              <h1>Technology that works <span className='prib__forYou'>for you</span></h1>
            </div>
            <div className='prib__lightContext'>
              <p>
                Builds you a <span>global business</span> with an
                ecosystem of different technologies from multiple industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PribSection
