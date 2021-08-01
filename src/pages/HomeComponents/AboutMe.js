import React from 'react'
import Kevin from '../../assets/Kevin.jpg';
import './AboutMe.scss'

function AboutMe({ sectionToScroll }) {
  return (
    <div className='aboutme__wrapper' ref={sectionToScroll}>
      <div className='aboutme__innerWrapper'>
        <div className='aboutme__testimonialWrapper'>
          <div className='aboutme__quotesIcon'>
            <i className="fas fa-quote-left"></i>
          </div>
          <p className='aboutme__testimonial'>
            Soy ingeniero de profesión. Amo lo que hago, pero quería más. La oportunidad con
            <span className='aboutme__ibuumerang'> iBuumerang </span>elevó mi éxito a nivel global
            generando ingreso residual en multiples industrias sin dejar lo que estoy haciendo.
            ¿Quieres alcanzar libertad financiera? Te enseñamos a obtener resultados rápido!
          </p>
        </div>
        <div className='aboutme__infoWrapper'>
          <div className='aboutme__info'>
            <p>
              Kevin J Ramirez
            </p>
            <p>
              kevjramirez@yahoo.com
            </p>
            <p>
              (787) 430-7478
            </p>
          </div>
          <img src={Kevin} alt="Kevin" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
