import {useHistory} from 'react-router-dom'
import {ConnectingButton} from './connecting-button'

export const ConnectingButtons = () => {
  const history = useHistory()
  const pushToJoinRoom = () => {
    history.push('/join-room')
  }

  const pushToCreateRoom = () => {
    history.push('/join-room?host=true')
  }
  return (
    <div className="connecting_buttons_container">
      <ConnectingButton text="Entrar na Sala"  onClickHandler={pushToJoinRoom}/>
      <ConnectingButton createRoom text="Criar Sala"  onClickHandler={pushToCreateRoom} />
    </div>
  )
}