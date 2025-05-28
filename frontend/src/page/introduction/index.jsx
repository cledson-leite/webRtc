import logo from '../../assets/icons/logo.png'
import { ConnectingButtons } from  './component/connecting-buttons'

import './Introduction.css'

export const IntroductionPage = () => {
  return (
    <div className="container">
      <div className="panel">
        <img src={logo} className="image" alt="Logo" />
        <ConnectingButtons />
      </div>
    </div>
  )
}