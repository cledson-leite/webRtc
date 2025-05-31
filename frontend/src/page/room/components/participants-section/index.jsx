import { Participants } from "../participants"
import { ParticpantsLabel } from "../participants-label"

export const ParticipantsSection = () => {
  return (
    <div className="participants_container">
      <ParticpantsLabel />
      <Participants />
    </div>
  )
}