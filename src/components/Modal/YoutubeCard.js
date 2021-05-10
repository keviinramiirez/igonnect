import VideoModal from './VideoModal'
import ModalVideo from 'react-modal-video'

const VideoCard = ({ onClose, videoId, videoIsShown }) => {
  return (
    <VideoModal onClose={onClose}>
      <ModalVideo
        theme='dark'
        chanel='youtube'
        isOpen={videoIsShown}
        videoId={videoId}
        onClose={() => onClose}
      />
    </VideoModal>
  )
}

export default VideoCard

