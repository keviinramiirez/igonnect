import VideoModal from '../../components/Modal/VideoModal'
import ModalVideo from 'react-modal-video'
import SkintechVideo from '../../assets/videos/skintech_demo.mp4'

const VideoCard = ({ onClose, videoIsShown }) => {
  return (
    <VideoModal onClose={onClose}>
      <video width="400" controls>
        <source src={SkintechVideo} type="video/mp4" />
      </video>
    </VideoModal>
  )
}

export default VideoCard