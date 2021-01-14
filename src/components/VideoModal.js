import React, { useState } from 'react'
import { Button } from '../components/Button/Button'
import './VideoModal.scss'
import ModalVideo from 'react-modal-video'


function VideoModal({ open, children, onClose }) {

  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tucWP9pkibQ" onClose={() => setOpen(false)} />
      {/* <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button> */}
    </>
  )
}

export default VideoModal





// import ModalVideo from 'react-modal-video'

// function VideoModal() {
//   const [isOpen, setOpen] = useState(false)

//   function openModal() {
//     setOpen(true);
//   };

//   return (
//     <React.Fragment>

//       <ModalVideo
//         theme='dark'
//         chanel='youtube'
//         isOpen={isOpen}
//         videoId='tucWP9pkibQ'
//         onClose={() => setOpen(false)}
//       />
//       <button onClick={() => setOpen(true)}>Open</button>
//       {/* <Button
//         className='btns'
//         buttonStyle='btn__primary'
//         buttonSize='btn__large'
//         href='https://izence.com/'
//       >
//         Learn More
//       </Button> */}
//     </React.Fragment>
//   )
// }

// export default VideoModal
