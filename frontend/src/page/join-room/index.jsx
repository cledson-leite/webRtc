import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {setIsRoomCreator} from '../../store/action'
import {Title} from './component/title'

import './JoinRoom.css'
import { Content } from './component/Content'

export const JoinRoomPage = () => {
  const {isRoomCreator} = useSelector(state => state)
  const dispatch =useDispatch()
  const search = useLocation().search

  useEffect(() => {
   const hostParam = new URLSearchParams(search).get('host')
   if (hostParam) {
     dispatch(setIsRoomCreator(true))
   }
  }, [dispatch, search]);
  return (
    <div className="container">
      <div className="panel">
        <Title  isRoomCreator={isRoomCreator}/>
        <Content />
      </div>
    </div>
  )
}