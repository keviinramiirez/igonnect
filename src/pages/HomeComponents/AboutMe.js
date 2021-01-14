import React from 'react'
import Kevin from '../../assets/Kevin.jpg';
import './AboutMe.scss'

function AboutMe({ sectionToScroll }) {
  return (
    <div className='aboutme__wrapper' ref={sectionToScroll}>
      <div className='aboutme__innerWrapper'>
        <div className='aboutme__testimonialWrapper'>
          <div className='aboutme__quotesIcon'>
            <i class="fas fa-quote-left"></i>
          </div>
          <p className='aboutme__testimonial'>
            I quantify my hapiness in the number of people who's life I made a little bit better.
            At <span className='aboutme__ibuumerang'>iBuumerang</span>, the philosophy of giving back is at the heart of our culture. Your brain
            is designed to keep you confortable against "too good to be true" opportunities, but
            don't miss out on this one.
          </p>
        </div>
        <div className='aboutme__info'>
          <div className='aboutme__myInfo'>
            <p className='aboutme__name'>
              Kevin J Ramirez
            </p>
            <p className='aboutme__email'>
              kevjramirez@igonnect.com
            </p>
            <p className='aboutme__phone'>
              (787) 430-7478
            </p>
          </div>
          <img src={Kevin} alt="Kevin's Picture" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
