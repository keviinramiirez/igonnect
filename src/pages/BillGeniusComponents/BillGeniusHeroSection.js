import React from 'react'
// import { ReactComponent as BillSVG } from '../../assets/SVG/bill_bottom.svg'
import { ReactComponent as BillBottomSVG } from '../../assets/SVG/bill_bottomMasked.svg'
import { ReactComponent as BillSVG } from '../../assets/SVG/bill.svg'
import { ReactComponent as BillCenteredSVG } from '../../assets/SVG/bill_centered.svg'
import { ReactComponent as BillTopSVG } from '../../assets/SVG/bill_topMasked.svg'
import Button from '../../components/Button/Button'

import './BillGeniusHeroSection.scss'
import { lgphone, desktop } from '../../breakpoints/MediaBreakpoint'

function BillGeniusHeroSection() {
  function logos() {
    if (window.innerWidth <= lgphone + 10) {
      return (
        <>
          <div className='bill__billLogoBottom' style={{ overflow: 'hidden' }}>
            <BillCenteredSVG height={String(770)} width={String(422)} viewBox="0 -455 650 602" alt='iGo Logo' />
          </div>
          <div className='bill__billLogoTop'>
            <BillTopSVG height={String(350)} width={String(102)} viewBox="50 800 650 602" alt='iGo Logo' />
          </div>
        </>
      )
    }
    else if (window.innerWidth <= desktop) {
      return (
        <>
          <div className='bill__billLogoBottom'>
            <BillBottomSVG height={String(650)} width={String(602)} viewBox="0 -60 650 602" alt='iGo Logo' />
          </div>
          <div className='bill__billLogoTop'>
            <BillTopSVG height={String(350)} width={String(302)} viewBox="50 60 650 602" alt='iGo Logo' />
          </div>
        </>
      )
    }
    else {
      let billOpacity = (window.innerWidth <= 1240 && window.innerWidth > desktop) ? { opacity: '0' } : {};
      return (
        <>
          <div className='bill__billLogoBottom'>
            <BillBottomSVG height={String(650)} width={String(602)} viewBox="0 -60 650 602" alt='iGo Logo' />
          </div>
          <div className='bill__billLogo'>
            <BillSVG style={billOpacity} height={String(450)} width={String(402)} viewBox="0 -60 650 602" alt='iGo Logo' />
          </div>
          <div className='bill__billLogoTop'>
            <BillTopSVG height={String(260)} width={String(202)} viewBox="50 60 650 602" alt='iGo Logo' />
          </div>
        </>
      )
    }
  }

  // window.addEventListener('resize', isDesktopSize);

  const utilities1 = [
    'Electricity',
    'Cable, Internet, Phone',
    'Satellite Radio',
    'Home Security',
  ]
  const utilities2 = [
    'Pest Control',
    'Lawn Care',
    'Waste Management',
    'and more...'
  ]

  const bill__utilityBills = utilities => {
    return (
      (window.innerWidth <= lgphone) ?
        <>
          {utilities.map((util, i) => (
            ((util !== 'and more...') && (
              <li key={i}>
                <div className='card'>
                  <p>{util}</p>
                </div>
              </li>
            ))
          ))}
        </> :
        <>
          {utilities.map((util, i) => (
            <li key={i}><p>{util}</p></li>
          ))}
        </>
    )
  }

  return (
    <div className='bill__heroWrapper'>
      {logos()}

      <div className='bill__contextContainer'>
        <div className='bill__context'>
          <h1 className='bill__title'>
            Bill Genius
          </h1>
          <h2 className='bill__subtitle'>
            Your personal bill negotiator
          </h2>
          <p className='bill__subtitleContext'>
            You don't pay unless it saves you money
          </p>
          <div className='bill__listWrapper'>
            <ul>
              {bill__utilityBills(utilities1)}
            </ul>
            <ul>
              {(window.innerWidth > lgphone) && (
                <>
                  {bill__utilityBills(utilities2)}
                </>
              )}
            </ul>
          </div>
          <div className='bill__buttons'>
            <Button
              buttonVariant='contained'
              buttonColor='primary'
              onClick={() => window.open("https://www.billgenius.com/", "_blank")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillGeniusHeroSection
