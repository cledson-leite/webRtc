import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { IntroductionPage } from './page/introduction'
import { JoinRoomPage } from './page/join-room'
import { RoomPage } from './page/room'

export const App = () => {
    return (
    <Router>
      <Switch>
        <Route path="/join-room" component={JoinRoomPage} />
        <Route path="/room" component={RoomPage} />
        <Route path="/" component={IntroductionPage} />
      </Switch>
    </Router>
  )
}