import {useHistory} from 'react-router-dom'

const Button = props => {
  const {text, onClickHandler, isCancel} = props
  const buttonClass = isCancel ? 'cancel_button' : 'success_button'
  return (
    <button className={buttonClass} onClick={onClickHandler}>{text}</button>
  )
}

export const Buttons = (props) => {
  const {handleJoinRoom, isRoomCreator} = props
  const history = useHistory()
  const successText = isRoomCreator ? 'Host' : 'Join'
  return (
    <div className="buttons_container">
      <Button text={successText} onClickHandler={handleJoinRoom} />
      <Button text="Cancel" onClickHandler={() => history.push('/')} isCancel />
    </div>
  )
}