import './IDecideList.css'
import IDecideBanner from '../../assets/idecide_banner.png'
import IDecideBackSVG from '../../assets/SVG/idecide_background.svg'
import IDecideCard from './IDecideCard'
import iDecideData from './iDecideData'
import { desktop } from '../../breakpoints/MediaBreakpoint'

function IDecideList() {
  const iDecideBanner = () => {
    let width = 420;
    let height = 120;
    if (window.innerWidth < 456) {
      width -= 140;
      height -= 40;
    }
    else if (window.innerWidth < desktop) {
      width -= 70;
      height -= 20;
    }

    return <img
      src={IDecideBanner}
      width={width}
      height={height}
      alt='iDecide Banner'
    />
  }

  return (
    <>
      {window.innerWidth > 790 && <img className={'idecideList__background'} src={IDecideBackSVG} alt='iDecide Background' />}
      <div className='idecideList'>
        {iDecideBanner()}
        <div className='idecideList__list'>
          {iDecideData.map(({ title, image, context, link }) => (
            <IDecideCard
              key={link}
              title={title}
              image={image}
              context={context}
              link={link}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default IDecideList
