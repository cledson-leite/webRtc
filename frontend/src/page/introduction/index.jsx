import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setIsRoomCreator} from '../../store/action'
import logo from '../../assets/icons/logo.png'
import { ConnectingButtons } from  './component/connecting-buttons'

import './Introduction.css'

export const IntroductionPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setIsRoomCreator(false))
  }, [dispatch]);
  return (
    <div className="container">
      <div className="painel">
        <img src={logo} className="image" alt="Logo" />
        <ConnectingButtons />
      </div>
    </div>
  )
}