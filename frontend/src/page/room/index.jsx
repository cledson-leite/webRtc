import {useSelector} from 'react-redux'

import { ChatSection } from './components/chat-section'
import { ParticipantsSection } from './components/participants-section'
import { RoomLabel } from './components/room-label'
import { VideoSection } from './components/video-section'

import './Room.css'

export const RoomPage = () => {
  const {roomId} = useSelector(state => state)
  return (
    <div className="room_container" >
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
      <RoomLabel  roomId={roomId}/>
    </div>
  )
}