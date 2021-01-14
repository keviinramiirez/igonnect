import React, { useState } from 'react'
// import { ReactComponent as BillSVG } from '../../assets/SVG/bill_bottom.svg'
import { ReactComponent as BillBottomSVG } from '../../assets/SVG/bill_bottomMasked.svg'
import { ReactComponent as BillSVG } from '../../assets/SVG/bill.svg'
import { ReactComponent as BillCenteredSVG } from '../../assets/SVG/bill_centered.svg'
import { ReactComponent as BillTopSVG } from '../../assets/SVG/bill_topMasked.svg'
import { Button } from '../../components/Button/Button'
import './BillGeniusHeroSection.scss'
import { lgphone, desktop } from '../../breakpoints/MediaBreakpoint'

function BillGeniusHeroSection() {
  const [svgReduceAmount, setSvgReduceAmount] = useState(0)

  const isDesktopSize = () => {

    // console.log('tf')

    // console.log(window.innerWidth <= desktop);
    // // if (window.innerWidth <= 425)
    // //   setSvgReduceAmount(300)
    // // else 
    // if (window.innerWidth <= 150)
    //   setSvgReduceAmount(100)
    // // else
    // //   setSvgReduceAmount(0)
  }

  function logos() {
    if (window.innerWidth <= lgphone + 10) {
      console.log('lgphone')
      return (
        <>
          <div className='bill__billLogoBottom' style={{ overflow: 'hidden' }}>
            <BillCenteredSVG height={String(770 - svgReduceAmount)} width={String(422 - svgReduceAmount)} viewBox="0 -455 650 602" alt='iGo Logo' />
            {/* <BillCenteredSVG height={String(770 - svgReduceAmount)} width={String(422 - svgReduceAmount)} viewBox="27 -550 650 602" alt='iGo Logo' /> */}
            {/* <BillCenteredSVG height={String(650 - svgReduceAmount)} width={String(302 - svgReduceAmount)} viewBox="0 -400 650 602" alt='iGo Logo' /> */}
          </div>
          <div className='bill__billLogoTop'>
            <BillTopSVG height={String(350 - svgReduceAmount)} width={String(102 - svgReduceAmount)} viewBox="50 800 650 602" alt='iGo Logo' />
          </div>
        </>
      )
    }
    else if (window.innerWidth <= desktop) {
      return (
        <>
          <div className='bill__billLogoBottom'>
            <BillBottomSVG height={String(650 - svgReduceAmount)} width={String(602 - svgReduceAmount)} viewBox="0 -60 650 602" alt='iGo Logo' />
          </div>
          <div className='bill__billLogoTop'>
            <BillTopSVG height={String(350 - svgReduceAmount)} width={String(302 - svgReduceAmount)} viewBox="50 60 650 602" alt='iGo Logo' />
          </div>
        </>
      )
    }
    else {
      let billOpacity = (window.innerWidth <= 1240 && window.innerWidth > desktop) ? { opacity: '0' } : {};
      return (
        <>
          <div className='bill__billLogoBottom'>
            <BillBottomSVG height={String(650 - svgReduceAmount)} width={String(602 - svgReduceAmount)} viewBox="0 -60 650 602" alt='iGo Logo' />
          </div>
          <div className='bill__billLogo'>
            <BillSVG style={billOpacity} height={String(450 - svgReduceAmount)} width={String(402 - svgReduceAmount)} viewBox="0 -60 650 602" alt='iGo Logo' />
          </div>
          <div className='bill__billLogoTop'>
            <BillTopSVG height={String(260 - svgReduceAmount)} width={String(202 - svgReduceAmount)} viewBox="50 60 650 602" alt='iGo Logo' />
          </div>
        </>
      )
    }
  }

  window.addEventListener('resize', isDesktopSize);

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
          {utilities.map(util => {
            return (
              (util === 'and more...')
                ? null :
                <li>
                  <div className='card'>
                    <p>{util}</p>
                  </div>
                </li>
            )
          })}
        </> :
        <>
          {utilities.map(util => (
            <li><p>{util}</p></li>
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
            <ul className='bill__utilityBills'>
              {bill__utilityBills(utilities1)}
            </ul>
            <ul className='bill__utilityBills'>
              {
                (window.innerWidth > lgphone) ?
                  <>
                    {bill__utilityBills(utilities2)}
                  </>
                  : null
              }
            </ul>
          </div>
          <div className='bill__buttons'>
            <Button
              buttonStyle='style__transparent'
              buttonBorder='border__primary_bill'
              buttonColor='color__primary_bill'
              buttonHover='hover__secondary'
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
