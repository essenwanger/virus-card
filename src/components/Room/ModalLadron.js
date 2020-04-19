import React from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import {updateGame} from '../../logic/logicVirus'
import CardModal from './CardModal'

class ModalLadron extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      select: null,
    };
    this.onPressRadio = this.onPressRadio.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show && this.props.show) {
      this.setState({select: null})
    }
  }

  onPressRadio(changeEvent){
    this.setState({
      select: Number.parseInt(changeEvent.target.value)
    });
  }

  onClick(){
    let key = this.props.keyRoom
    let selectTableCard = this.props.listLadron[this.state.select]
    let selectDeckCard = this.props.selectDeckCard
    let room = this.props.room
    let deckRoom = room.deck
    let table = room.players[selectTableCard.player].table
    let tableCard = table[selectTableCard.pos]
    if(room.players[selectDeckCard.player].table === undefined){
      room.players[selectDeckCard.player].table = []
    }
    room.players[selectDeckCard.player].table.push(tableCard)
    table.splice(selectTableCard.pos, 1)
    deckRoom.push(selectDeckCard.card)
    let deckPlayer = room.players[selectDeckCard.player].deck
    deckPlayer.splice(selectDeckCard.pos, 1)
    deckPlayer.push(deckRoom[0])
    deckRoom.shift()
    updateGame(key, room)
  }

  render() {
    let listLadron = this.props.listLadron.length===0? null : 
    this.props.listLadron.map((obj, i) =>
      <Row key={i} style={{ paddingBottom: '10px' }}>
        <Col xs={1}>
          <Form.Check key={i} 
          type={'radio'} 
          checked={this.state.select === i} 
          value={i} 
          onChange={this.onPressRadio}/>
        </Col>
        <Col xs={4}>
          {obj.name}
        </Col>
        <Col xs={2} style={{ paddingRight: '5px',paddingLeft: '5px' }}>
          <CardModal card={obj.organo} />
        </Col>
      </Row>
    );
    let messageModal = null
    if(this.props.listLadron.length===0){
      messageModal = 'No se puede utilizar esta carta'
    }
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Tirar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listLadron}
          {messageModal}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" disabled={this.state.select===null} onClick={this.onClick}>
            Seleccionar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalLadron;
