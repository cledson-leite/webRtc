import {useState} from "react";
import {useSelector} from 'react-redux'

import { OnlyAudio } from "../OnlyAudio";
import { Inputs } from "../Inputs";
import { ErrorMessage } from "../ErrorMessage";
import { Buttons } from "../Buttons";

export const Content = () => {
  const {isRoomCreator} = useSelector(state => state)
  const [idValue, setIdValue] = useState('')
  const [name, setName] = useState('')
  const [errorMessage] = useState(null)
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
       <Buttons  handleJoinRoom={() => console.log('join room')} isRoomCreator={isRoomCreator}/>
    </>
  )
}