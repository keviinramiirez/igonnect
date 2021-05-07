import classes from './VideoModal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />
}

const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
}

const portalElement = document.getElementById('video-portal')

const VideoModal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default VideoModal





// import React from 'react'
// import './Modal.scss'
// import ReactDom from 'react-dom'

// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   zIndex: 1000
// }

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .7)',
//   zIndex: 1000
// }

// function Modal({ open, children, onClose }) {
//   // const [isOpen, setOpen] = useState(false)

//   if (!open) return null;

//   return ReactDom.createPortal(
//     <>
//       <div style={OVERLAY_STYLES} />
//       <div style={MODAL_STYLES}>
//         <i onClick={onClose} className='fas fa-times' />
//         {children}
//       </div>
//     </>,
//     document.getElementById('zence-portal')
//   )
// }

// export default Modal





// // import ModalVideo from 'react-modal-video'

// // function VideoModal() {
// //   const [isOpen, setOpen] = useState(false)

// //   function openModal() {
// //     setOpen(true);
// //   };

// //   return (
// //     <React.Fragment>

// //       <ModalVideo
// //         theme='dark'
// //         chanel='youtube'
// //         isOpen={isOpen}
// //         videoId='tucWP9pkibQ'
// //         onClose={() => setOpen(false)}
// //       />
// //       <button onClick={() => setOpen(true)}>Open</button>
// //       {/* <Button
// //         className='btns'
// //         buttonStyle='btn__primary'
// //         buttonSize='btn__large'
// //         href='https://izence.com/'
// //       >
// //         Learn More
// //       </Button> */}
// //     </React.Fragment>
// //   )
// // }

// // export default VideoModal
