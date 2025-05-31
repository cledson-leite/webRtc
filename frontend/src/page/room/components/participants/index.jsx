import { memo } from "react"

export const Participants = () => {
  const dummyParticipants = [
    {identity: 'José'},
    {identity: 'Cledson'},
    {identity: 'da Silva'},
    {identity: 'Leite'},
  ]
  const SingleParticipant = memo( (props) => {
    const {identity, lastItem} = props
    return (
      <>
        <p className="participants_paragraph">{identity}</p>
        {!lastItem && <span className="participants_separator_line"></span>}
      </>
    )
  })
  return (
    <div className="participants_container">
      {dummyParticipants.map((participant, index) => {
        return (
          <SingleParticipant
            key={participant.identity}
            identity={participant.identity}
            lastItem={index === dummyParticipants.length - 1}
          />
        )
      })}
    </div>
  )
}