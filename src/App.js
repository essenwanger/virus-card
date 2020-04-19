import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main'
import PreRoom from './pages/PreRoom'
import Room from './pages/Room'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" 
          render={(props) => <Main {...props} />} />
          <Route exact path="/preroom/:room/:player" 
          render={(props) => <PreRoom {...props} />} />
          <Route exact path="/room/:room/:player" 
          render={(props) => <Room {...props} />} />
        </div>
      </Router>
    )  
  }
}

export default App;
