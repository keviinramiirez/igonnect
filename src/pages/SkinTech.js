import SkinTechHero from "./SkinTech/SkinTechHero"

function SkinTech({ isMobile, click }) {
  return (
    <>
      {(isMobile && click)
        ? null
        : <>
          <SkinTechHero />
        </>
      }
    </>
  )
}

export default SkinTech
