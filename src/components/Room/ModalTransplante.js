import React from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import {updateGame} from '../../logic/logicVirus'
import CardModal from './CardModal'

class ModalTransplante extends React.Component {

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
    let transplante = this.props.listTransplante[this.state.select]
    let tableA = transplante.tableA
    let tableB = transplante.tableB
    let selectDeckCard = this.props.selectDeckCard
    let room = this.props.room
    let deckRoom = room.deck
    let cardA = room.players[tableA.player].table[tableA.pos]
    let cardB = room.players[tableB.player].table[tableB.pos]
    room.players[tableA.player].table[tableA.pos] = cardB
    room.players[tableB.player].table[tableB.pos] = cardA
    deckRoom.push(selectDeckCard.card)
    let deckPlayer = room.players[selectDeckCard.player].deck
    deckPlayer.splice(selectDeckCard.pos, 1)
    deckPlayer.push(deckRoom[0])
    deckRoom.shift()
    updateGame(key, room)
  }

  render() {
    let listTransplante = this.props.listTransplante.length===0? null : 
    this.props.listTransplante.map((transplante, i) =>
      <Row key={i} style={{ paddingBottom: '10px' }}>
        <Col xs={1}>
          <Form.Check key={i} 
          type={'radio'} 
          checked={this.state.select === i} 
          value={i} 
          onChange={this.onPressRadio}/>
        </Col>
        <Col xs={2} style={{ paddingRight: '5px',paddingLeft: '5px' }}>
          <CardModal card={transplante.tableA.tableCard.organo} />
        </Col>
        <Col xs={4}>
          {transplante.tableB.name}
        </Col>
        <Col xs={2} style={{ paddingRight: '5px',paddingLeft: '5px' }}>
          <CardModal card={transplante.tableB.tableCard.organo} />
        </Col>
      </Row>
    );
    let messageModal = null
    if(this.props.listTransplante.length===0){
      messageModal = 'No se puede utilizar esta carta'
    }
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Tirar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listTransplante}
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

export default ModalTransplante;
