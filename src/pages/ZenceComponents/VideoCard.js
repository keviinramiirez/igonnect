import VideoModal from '../../components/Modal/VideoModal'
import ModalVideo from 'react-modal-video'

const VideoCard = ({ onClose, videoIsShown }) => {
  return (
    <VideoModal onClose={onClose}>
      <ModalVideo
        theme='dark'
        chanel='youtube'
        isOpen={videoIsShown}
        videoId='tucWP9pkibQ'
        onClose={() => onClose}
      />
    </VideoModal>
  )
}

export default VideoCard