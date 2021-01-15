import React from 'react'
import Kevin from '../../assets/Kevin.jpg';
import './ContactMeHeroSection.scss'

function ContactMeHeroSection() {
  return (
    <div className='contact__wrapper'>
      <div className='contact__innerWrapper'>
        <div className='contact__testimonialWrapper'>
          <div className='contact__quotesIcon'>
            <i class="fas fa-quote-left"></i>
          </div>
          <p className='contact__testimonial'>
            I quantify my hapiness in the number of people who's life I made a little bit better.
            At <span className='contact__ibuumerang'>iBuumerang</span>, the philosophy of giving back is at the heart of our culture. Your brain
            is designed to keep you confortable against "too good to be true" opportunities, but
            don't miss out on this one.
          </p>
        </div>
        <div className='contact__info'>
          <div className='contact__myInfo'>
            <p className='contact__name'>
              Kevin J Ramirez
            </p>
            <p className='contact__email'>
              kevjramirez@yahoo.com
            </p>
            <p className='contact__phone'>
              (787) 430-7478
            </p>
          </div>
          <img src={Kevin} alt="Kevin's Picture" />
        </div>
      </div>
    </div>
  )
}

export default ContactMeHeroSection
