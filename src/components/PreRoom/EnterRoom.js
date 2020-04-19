import React from 'react';
import { Button } from 'react-bootstrap';

class EnterRoom extends React.Component {

  render() {
    let keyPlayer = this.props.keyPlayer
    let numberPlayer = this.props.numberPlayer
    let player = this.props.player
    let button = null
    if(keyPlayer !== 'edit' && numberPlayer > 1){
      if(player !== undefined && player.creator !== undefined){
        button = <Button variant="dark" block onClick={this.props.enterRoom}>Empezar</Button>
      }else{
        button = <Button variant="dark" block onClick={this.props.enterRoom}>Entrar a la Sala</Button>
      }
    }
    return (
      <React.Fragment>
        {button}
      </React.Fragment>
    );
  }
}

export default EnterRoom;
