import { useState } from 'react'
import './SkinTechHero.scss'
import SkinTechSplashSvg from '../../assets/SVG/skintech_splash.svg'
import SkintechVideo from '../../assets/videos/skintech_demo.mp4'
import SkinTechPng from '../../assets/skintech.png'
import Button from '../../components/Button/Button'
import VideoCard from '../../components/Modal/VideoCard'

function SkinTechHero() {
  const [videoIsShown, setVideoIsShown] = useState(false)

  const showVideoHandler = () => {
    setVideoIsShown(true)
  }
  const hideVideoHandler = () => {
    setVideoIsShown(false)
  }

  // const isTabletSize = () => {
  //   setRotateSvgs(window.innerWidth > 768)
  // }

  // window.addEventListener('resize', isTabletSize);

  const skintechSvgs = () => {
    if (window.innerWidth <= 768) {
      return (
        <>
          <div className='skintech__img'>
            <img src={SkinTechSplashSvg} width={250} height={300} alt='Skin Tech Background' />
          </div>
          <div className='skintech__img'>
            <img src={SkinTechPng} className='skintech__productImg' style={{ marginBottom: '4.2em' }} width={224 - 300} height={890 - 630} alt='Skin Tech Product' />
          </div>
        </>
      )
    }
    if (window.innerWidth <= 1280) {
      return (
        <>
          <div className='skintech__img'>
            <img src={SkinTechSplashSvg} width={350} height={400} alt='Skin Tech Background' />
          </div>
          <div className='skintech__img'>
            <img src={SkinTechPng} className='skintech__productImg' style={{ marginBottom: '4.2em' }} width={224 - 300} height={890 - 550} alt='Skin Tech Product' />
          </div>
        </>
      )
    }
    return (
      <>
        <div className='skintech__img'>
          <img src={SkinTechSplashSvg} width={583} height={604} alt='Skin Tech Background' />
        </div>
        <div className='skintech__img'>
          <img src={SkinTechPng} className='skintech__productImg' width={224 - 100} height={890 - 400} alt='Skin Tech Product' />
        </div>
      </>
    )
  };

  return (
    <div className='skintech'>
      <div className='skintech__heroContent'>
        <div className='skintech__heroTitle'>
          <p className='protective'>Protective</p>
          <p className='glove'>Glove</p>
        </div>
        <div className='skintech__heroSubtitle'>
          <p>
            <span>100% protection </span>for 4 hours <br />
                killing bacteria viruses on contact.
              </p>
        </div>
        <div className='skintech__buttons'>
          <div style={{ marginRight: '1em', }}>
            <Button
              buttonVariant='outlined'
              buttonColor='primary'
              onClick={() => window.open("https://izence.com/skintech/", "_blank")}
            >
              Learn More
            </Button>
          </div>
          <Button
            buttonVariant='contained'
            buttonColor='secondary'
            onClick={() => showVideoHandler(true)}
          >
            Watch Video
          </Button>
          {videoIsShown && (
            <VideoCard
              videoIsShown={videoIsShown}
              onClose={hideVideoHandler}
              VideoLink={SkintechVideo}
            />
          )}
        </div>
      </div>
      {skintechSvgs()}
      {/* <div className='skintech__img'>
        <img src={SkinTechSplashSvg} width={583} height={604} alt='Skin Tech Background' />
      </div>
      <div className='skintech__img'>
        <img src={SkinTechPng} className='skintech__productImg' width={224 - 100} height={890 - 400} alt='Skin Tech Product' />
      </div> */}
    </div>
  )
}

export default SkinTechHero



// import { useState } from 'react'
// import './SkinTechHero.scss'
// import SkinTechSplashSvg from '../../assets/SVG/skintech_splash.svg'
// // import SkinTechSvg from '../../assets/SVG/skintech.svg'
// import SkinTechSvg from '../../assets/SVG/skintech2.svg'
// import SkinTechPng from '../../assets/skintech.png'
// import Button from '../../components/Button/Button'
// import VideoCard from './VideoCard'

// function SkinTechHero() {
//   const [videoIsShown, setVideoIsShown] = useState(false)

//   const showVideoHandler = () => {
//     setVideoIsShown(true)
//   }
//   const hideVideoHandler = () => {
//     setVideoIsShown(false)
//   }

//   // const isTabletSize = () => {
//   //   setRotateSvgs(window.innerWidth > 768)
//   // }

//   // window.addEventListener('resize', isTabletSize);

//   return (
//     <>
//       <div className='skintech__img'>
//         <img src={SkinTechSplashSvg} width={583} height={604} alt='Skin Tech Background' />
//       </div>
//       <div className='skintech__img'>
//         <img src={SkinTechPng} className='skintech__productImg' width={224 - 100} height={890 - 400} alt='Skin Tech Product' />
//       </div>
//       <div className='skintech'>
//         <div className='skintech__transHalfBlack'>
//           <div className='skintech__heroContentWrapper'>
//             <div className='skintech__heroContent'>
//               <div className='skintech__heroTitle'>
//                 <p className='protective'>Protective</p>
//                 <p className='glove'>Glove</p>
//               </div>
//               <div className='skintech__heroSubtitle'>
//                 <p>
//                   <span>100% protection </span>for four hours <br />
//                 killing bacteria viruses on contact.
//               </p>
//               </div>
//               <div className='skintech__buttons'>
//                 <div style={{ marginRight: '1em', }}>
//                   <Button
//                     buttonVariant='outlined'
//                     buttonColor='primary'
//                     onClick={() => window.open("https://izence.com/skintech/", "_blank")}
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//                 <div>
//                   <Button
//                     buttonVariant='contained'
//                     buttonColor='secondary'
//                     onClick={() => showVideoHandler(true)}
//                   >
//                     Watch Video
//                   </Button>

//                   {videoIsShown && (
//                     <VideoCard
//                       videoIsShown={videoIsShown}
//                       onClose={hideVideoHandler}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className='skintech__img' style={{ height: '300px', width: '300px', border: '1px solid #ff0000', display: 'table-cell', verticalAlign: 'middle' }}>
//         <img src={SkinTechSvg} width={383} height={404} style={{ float: 'right' }} alt='Abstract Skin Tech' />
//       </div> */}
//       </div>
//     </>
//   )
// }

// export default SkinTechHero
