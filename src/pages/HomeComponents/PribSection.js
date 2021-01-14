import React from 'react'
import './PribSection.scss'
import Typewriter from 'typewriter-effect';
// import PribImg from './prib_transparent_cropped.png';
// import PribImg from '../../assets/prib_transparent_cropped.png';
// import PribPng from '../../assets/prib_trans.png'
import PribPng from '../../assets/prib.PNG'
// import { ReactComponent as PribSvg } from '../../assets/SVG/prib3.svg'
import { phone, lgphone, tablet, desktop, heroVideoCutout } from '../../breakpoints/MediaBreakpoint'

function PribSection() {
  const pribPng = () => {
    const innerWidth = window.innerWidth;
    let height = 437, width = 550;
    if (innerWidth <= phone) {
      width -= 300; height -= 260;
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
      width -= 180; height -= 200;
    }
    else if (innerWidth <= heroVideoCutout) {
      width -= 50; height -= 50;
    }


    // return <PribSvg height={height} width={width} viewBox="0 -100 1413 1172" alt='Flexibility Icon' />
    return <img src={PribPng} height={height} width={width} alt='' />
  }

  return (
    <div className='prib__wrapper' style={{ marginBottom: '-10px' }}>
      {/* <div style={{ position: 'relative', margin: '0 auto', }}>
        <span className='sharing' sharing='sharing'>s</span>
        <div style={{ position: 'absolute', top: '0', width: '100%' }}>
          <span className='selling' selling='selling'>selling</span>
        </div>
      </div> */}

      <div className='prib__innerWrapper'>
        <div className='prib__left'>
          {pribPng()}
          {/* <img src={PribSvg} alt='' /> */}
        </div>
        <div className='prib__right'>
          <div className='prib__context'>
            <h1>
              <p className='prib__thePribContainer'>
                <span className='the'>THE</span>
                {/* <div style={{ display: 'inline' }}> */}
                {/* <span className='prib'> */}
                <span className='prib'>PRIB</span>
                {/* <span className='tm'>&trade;</span> */}
                {/* </span> */}
                {/* </div> */}
              </p>
            </h1>
            <div className='prib__subtitle'>
              <h1>Technology that works <span className='prib__forYou'>for you</span></h1>
            </div>
            <div className='modern__lightContext'>
              <p>Our technologies are build around The PRIB.</p>
            </div>
          </div>

          {/* <div className='prib__subtitleContext'>
            <div id='prib__subtitleFirstSentence' style={{ display: 'flex', whiteSpace: 'nowrap !important', width: '330px' }}>
              <span>Just focus on </span>
              <div id='prib__typewriter' style={{ display: 'inline', margin: '0 0.5em', color: '#F5CA51', fontWeight: 400 }}>
                <Typewriter
                  // style={{ display: 'inline' }}
                  onInit={typewriter => {
                    typewriter
                      .typeString('SHARING')
                      .pauseFor(4500)
                      .deleteAll(200)
                      .typeString('not selling')
                      .pauseFor(700)
                      .deleteAll(70)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <span>our </span>
            </div>
            <span>
              patented technologies and get paid while consumers save money.
            </span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default PribSection
