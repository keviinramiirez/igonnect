import React from 'react'
import './PribSection.scss'
// import PribImg from './prib_transparent_cropped.png';
// import PribImg from '../../assets/prib_transparent_cropped.png';
// import PribPng from '../../assets/prib_trans.png'
import PribPng from '../../assets/prib.PNG'
// import { ReactComponent as PribSvg } from '../../assets/SVG/prib3.svg'
import { phone, lgphone, tablet, desktop, heroVideoCutout } from '../../breakpoints/MediaBreakpoint'

function PribSection() {
  const pribPng = () => {
    const innerWidth = window.innerWidth;
    let width = 550, height = 437;
    if (innerWidth <= 350) {
      width -= 250; height -= 210;
    }
    else if (innerWidth <= lgphone) {
      width -= 200; height -= 180;
    }
    else if (innerWidth <= 660) {
      width -= 140; height -= 120;
    }
    else if (innerWidth <= tablet) {
      width -= 220; height -= 200;
    }
    else if (innerWidth <= 720) {
      width -= 250; height -= 240;
    }
    else if (innerWidth <= desktop) {
      console.log('siiip')
      width -= 200; height -= 190;
    }
    else if (innerWidth <= heroVideoCutout) {
      width -= 50; height -= 50;
    }


    // return <PribSvg height={height} width={width} viewBox="0 -100 1413 1172" alt='Flexibility Icon' />
    return <img src={PribPng} width={width} height={height} alt='' />
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
              {/* <p>
                Builds you a business <strong>globally</strong> in a systematic
                way with an ecosystem of different products
                and services from multiple industries.
              </p> */}
              <p>
                Builds you a <span>global business</span> with
                an ecosystem of different products and services from multiple industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PribSection
