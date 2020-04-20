import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import firebase from '../util/firebase'
import {shuffleArray} from '../logic/logicVirus'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      invalidName: false,
      disabledButton: false
    };
    this.onCreateRoom = this.onCreateRoom.bind(this);
    this.onRules = this.onRules.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onCreateRoom() {
    if(this.state.name.length === 0){
      this.setState({invalidName: true})
    }else{
      firebase.database().ref('/deck').once('value').then((snapshot) => {
        let deck = snapshot.val();
        deck = shuffleArray(deck)
        let key = firebase.database().ref().child('room').push().key
        let keyPlayer = firebase.database().ref().child('room/'+ key + '/players').push().key
        let room = {
          deck: deck,
          turn: keyPlayer
        }
        room.players = {}
        room.players[keyPlayer] = {}
        room.players[keyPlayer].name = this.state.name
        room.players[keyPlayer].creator = true
        firebase.database().ref('room/' + key).set(room);
        this.props.history.push('/preroom/'+key+'/'+keyPlayer)
      });
      this.setState({disabledButton: true})
    }
  }

  onRules() {
    this.props.history.push('/rules')
  }

  handleChange(event) {
    this.setState({name: event.target.value, invalidName: false});
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col style={styleMain}>
            <h3 style={{paddingBottom: '100px'}}>VIRUS APP</h3>
            <Form.Group>
              <Form.Control type="text" value={this.state.name} 
              isInvalid={this.state.invalidName}
              onChange={this.handleChange} 
              placeholder="Ingresa tu apodo" />
            </Form.Group>
            <Button variant="info" disabled={this.state.disabledButton} 
              block onClick={this.onCreateRoom}>
              Crear Partida
            </Button>
            <Button variant="secondary" 
              block onClick={this.onRules}>
              Reglas
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const styleMain = {
  textAlign: 'center', 
  paddingTop: '100px'
}

export default Main;
