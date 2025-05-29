export const Title = props => {
  const title = props.isRoomCreator ? 'Host meeting' : 'Join meeting'
  return (
    <h1 className="title">{title}</h1>
  )
}