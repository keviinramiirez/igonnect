import React, { useRef } from 'react'
import HeroSection from './HomeComponents/HeroSection'
import PribSection from './HomeComponents/PribSection'
import ModernizedSection from './HomeComponents/ModernizedSection'
import BenefitsSection from './HomeComponents/BenefitsSection'
import AboutMe from './HomeComponents/AboutMe'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import './Home.css'


function Home({ isMobile, click }) {
  const sectionToScroll = useRef(null);
  const toScroll = () => window.scrollTo({ top: sectionToScroll.current.offsetTop, behavior: 'smooth' })

  return (
    <div className='home'>
      {(isMobile && click)
        ? null
        : <>
          <ScrollToTop />
          <HeroSection toScroll={toScroll} />
          <PribSection />
          <ModernizedSection />
          <BenefitsSection />
          <AboutMe sectionToScroll={sectionToScroll} />
        </>
      }
    </div>
  )
}

export default Home;
