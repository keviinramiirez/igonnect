import BillGeniusHeroSection from './BillGeniusComponents/BillGeniusHeroSection'

function BillGenius({ isMobile, click }) {
  return (
    <>
      {(isMobile && click)
        ? null
        : <>
          <BillGeniusHeroSection />
        </>
      }
    </>
  )
}

export default BillGenius
