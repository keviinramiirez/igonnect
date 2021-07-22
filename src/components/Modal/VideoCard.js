import VideoModal from '../../components/Modal/VideoModal'
import { lgphone } from '../../breakpoints/MediaBreakpoint'

const VideoCard = ({ onClose, VideoLink }) => {
  return (
    <VideoModal onClose={onClose}>
      <video width={(window.innerWidth > lgphone) ? '400' : '300'} controls>
        <source src={VideoLink} type="video/mp4" />
      </video>
    </VideoModal>
  )
}

export default VideoCard