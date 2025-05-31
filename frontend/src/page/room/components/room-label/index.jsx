export const RoomLabel = (props) => {
  const {roomId} = props
  return (
    <div className="room_label">
      <p className="room_label_paragraph">ID: {roomId}</p>
    </div>
  )
}