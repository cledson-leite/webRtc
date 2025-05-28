export const ConnectingButton = props => {
  const {createRoom, text, onClickHandler} = props
  const buttonClass = createRoom ? 'create_room_button' : 'join_room_button'
  return (
    <button className={buttonClass} onClick={onClickHandler}>{text}</button>
  )
}