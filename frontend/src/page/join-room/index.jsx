import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {setIsRoomCreator} from '../../store/action'

import './JoinRoom.css'

export const JoinRoomPage = () => {
  const dispatch =useDispatch()
  const search = useLocation().search

  useEffect(() => {
   const isRoomCreator = new URLSearchParams(search).get('host')
   if (isRoomCreator) {
     dispatch(setIsRoomCreator(true))
   }
  }, []);
  return (
    <div className="container">
      <div className="panel">

      </div>
    </div>
  )
}