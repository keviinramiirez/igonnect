import React from 'react'
import './ModernizedSection.scss'
import { ReactComponent as BrainIcon } from '../../assets/SVG/modernize_brain.svg'
import { ReactComponent as DataIcon } from '../../assets/SVG/modernize_analytics.svg'
import { ReactComponent as ServiceIcon } from '../../assets/SVG/benefits_service.svg'
import Typewriter from 'typewriter-effect';





function ModernizedSection() {


  // componentDidMount() {
  //   this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  // };

  // setInterval(() => {
  //   console.log(i)
  //   seti(i + 1)
  //   if (i % 12 < 3) {
  //     setAiActive(false)
  //     setDataActive(true);
  //   } else if (i % 12 < 6) {
  //     setDataActive(false);
  //     setServiceActive(true)
  //   } else if (i % 12 < 9) {
  //     setServiceActive(false)
  //     setAiActive(true)
  //   }
  // }, 2000)

  return (
    <div className='modern__wrapper' style={{ marginBottom: '-10px' }}>
      <div className='modern__innerWrapper'>
        <div className='modern__left'>
          <div className='modern__boldContext'>
            <span className='modern__networkMarketing'>Network Marketing</span>
            <p className='modern__modernized'>Modernized</p>
          </div>
          <div className='modern__subtitleContext'>
            <div className='modern_firstSentence'>
              <p>Just focus on </p>
              <div className='prib__typewriter'>
                <Typewriter
                  onInit={typewriter => {
                    typewriter
                      .changeDelay(100)
                      .typeString('SHARING!')
                      .pauseFor(4500)
                      .deleteAll(100)
                      .changeDelay(100)
                      .typeString('NO SELLING')
                      .pauseFor(1000)
                      .deleteAll(10)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <p className='modern__secondSentence'>
              Online business to build generational<br />wealth with perpetual residual income.
            </p>
          </div>
        </div>
        <div className='modern__right'>
          <div className='modern__icons'>
            <div className='modern__icon'>
              <svg width="90" height="90">
                <DataIcon className='modern__data' height='90' width='90' alt='Data Icon' />
                <ServiceIcon className='modern__service' height='90' width='90' alt='Service Icon' />
                <BrainIcon className='modern__ai' height='90' width='90' alt='Brain Icon' />
              </svg>
            </div>
            <div className='modern__dataText modern__iconText'>
              <p>Data Analytics</p>
            </div>
            <div className='modern__serviceText modern__iconText'>
              <p>Customer Service</p>
            </div>
            <div className='modern__aiText modern__iconText'>
              <p>Artificial Intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernizedSection
