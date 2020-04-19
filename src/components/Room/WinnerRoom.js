import React from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { shuffleArray } from '../../logic/logicVirus'
import firebase from '../../util/firebase'

class WinnerRoom extends React.Component {

  constructor(props) {
    super(props);
    this.onRepeatGame = this.onRepeatGame.bind(this);
  }

  onRepeatGame() {
    let key = this.props.keyRoom
    let room = this.props.room
    firebase.database().ref('/deck').once('value').then((snapshot) => {
      let deck = snapshot.val();
      deck = shuffleArray(deck)
      Object.keys(room.players).forEach((key)=>{
        room.players[key].table = null
        let deckPlayer = [];
        deckPlayer.push(deck[0])
        deck.shift()
        deckPlayer.push(deck[0])
        deck.shift()
        deckPlayer.push(deck[0])
        deck.shift()
        room.players[key].deck = deckPlayer
      });
      room.deck = deck
      room.winner = null
      firebase.database().ref('room/' + key).set(room);
    });
  }

  render() {
    let room=this.props.room
    let keyPlayer=this.props.keyPlayer
    let winnerPlayer=room.players[room.winner]
    let creator=room.players[keyPlayer].creator
    return (
      <React.Fragment>
      { winnerPlayer !== undefined &&
        <Row style={{paddingTop: '20px'}}>
          <Col>
            <Alert variant={'success'}>
              <Row>
                <Col>
                  Ganador {winnerPlayer.name} 
                </Col>
                {creator &&
                <Col>
                <div className="d-flex justify-content-end">
                  <Button variant="dark" onClick={this.onRepeatGame}>
                    Volver a Jugar
                  </Button>
                </div>
                </Col>
                }
              </Row>
            </Alert>
          </Col>
        </Row>
      }
      </React.Fragment>
    );
  }
}

export default WinnerRoom;
