import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import { OnlyAudio } from "../OnlyAudio";
import { Inputs } from "../Inputs";
import { ErrorMessage } from "../ErrorMessage";
import { Buttons } from "../Buttons";
import { getRoomExists } from "../../../../utils/api";
import { setIdentity, setRoomId } from "../../../../store/action";

export const Content = () => {
  const {isRoomCreator} = useSelector(state => state)
  const [idValue, setIdValue] = useState('')
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleJoinRoom = () => {
    dispatch(setIdentity(name))
    if(isRoomCreator) {
      createRoom()
    } else {
      joinRoom()
    }
  }

  const joinRoom = async () => {
    const response = await getRoomExists(idValue)
    const {roomExists, full} = response
    if(!roomExists) {
      setErrorMessage('Meeting not fond. Check your meeting ID')
      return
    }
    if(full) {
      setErrorMessage('Meeting is full. Please try again later')
      return
    }
    dispatch(setRoomId(idValue))
    history.push('/room')
  }

  const createRoom = () => {
    history.push('/room')
  }
  return (
    <>
      <Inputs
        idValue={idValue}
        setIdValue={setIdValue}
        name={name}
        setName={setName}
        isRoomCreator={isRoomCreator}
       />
       <OnlyAudio />
       <ErrorMessage errorMessage={errorMessage} />
       <Buttons  handleJoinRoom={handleJoinRoom} isRoomCreator={isRoomCreator}/>
    </>
  )
}