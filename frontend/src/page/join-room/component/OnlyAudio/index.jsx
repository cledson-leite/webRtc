import {useSelector, useDispatch} from 'react-redux'
import { setIsOnlyAudio } from '../../../../store/action'
import checkbox from '../../../../assets/icons/check.png'

export const OnlyAudio = () => {
  const dispatch = useDispatch()
  const {isOnlyAudio} = useSelector(state => state)
  const handleConnectionTypeChange = () => {
    dispatch(setIsOnlyAudio(!isOnlyAudio))
  }
  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {isOnlyAudio && <img className="checkbox_image" src={checkbox} alt="CheckBox" />}
      </div>
      <p className="checkbox_container_paragraph">Only Audio</p>
    </div>
  )
}