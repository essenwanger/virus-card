import React from 'react';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import {updateGame} from '../../logic/logicVirus'
import CardModal from './CardModal'

class ModalMedicinaVirus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      select: null,
    };
    this.onPressRadio = this.onPressRadio.bind(this);
    this.onClick = this.onClick.bind(this);
    this.tirarSelectMedicina = this.tirarSelectMedicina.bind(this);
    this.tirarSelectVirus = this.tirarSelectVirus.bind(this);
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
    let selectDeckCard = this.props.selectDeckCard
    let tipoCard = selectDeckCard.card.valor.split('-')[0]
    if(tipoCard === 'medicina'){
      this.tirarSelectMedicina()
    }
    if(tipoCard === 'virus'){
      this.tirarSelectVirus()
    }
  }

  tirarSelectMedicina(){
    let key = this.props.keyRoom
    let selectTableCard = this.props.listMedicinaVirus[this.state.select]
    let selectDeckCard = this.props.selectDeckCard
    let room = this.props.room
    let deckRoom = room.deck
    let table = room.players[selectTableCard.player].table
    let tableCard = table[selectTableCard.pos]
    if(tableCard.item1 === undefined){
      tableCard.item1 = selectDeckCard.card
      let deckPlayer = room.players[selectDeckCard.player].deck
      deckPlayer.splice(selectDeckCard.pos, 1)
      deckPlayer.push(deckRoom[0])
      deckRoom.shift()
      updateGame(key, room)
    }else{
      let item1 = tableCard.item1
      let tipoItem1 = item1.valor.split('-')[0]
      if(tipoItem1 === 'virus'){
        deckRoom.push(item1)
        deckRoom.push(selectDeckCard.card)
        tableCard.item1 = null
        let deckPlayer = room.players[selectDeckCard.player].deck
        deckPlayer.splice(selectDeckCard.pos, 1)
        deckPlayer.push(deckRoom[0])
        deckRoom.shift()
        updateGame(key, room)
      }
      if(tipoItem1 === 'medicina'){
        tableCard.item2 = selectDeckCard.card
        let deckPlayer = room.players[selectDeckCard.player].deck
        deckPlayer.splice(selectDeckCard.pos, 1)
        deckPlayer.push(deckRoom[0])
        deckRoom.shift()
        updateGame(key, room)
      }
    }
  }

  tirarSelectVirus(){
    let key = this.props.keyRoom
    let selectTableCard = this.props.listMedicinaVirus[this.state.select]
    let selectDeckCard = this.props.selectDeckCard
    let room = this.props.room
    let deckRoom = room.deck
    let table = room.players[selectTableCard.player].table
    let tableCard = table[selectTableCard.pos]
    if(tableCard.item1 === undefined){
      tableCard.item1 = selectDeckCard.card
      let deckPlayer = room.players[selectDeckCard.player].deck
      deckPlayer.splice(selectDeckCard.pos, 1)
      deckPlayer.push(deckRoom[0])
      deckRoom.shift()
      updateGame(key, room)
    }else{
      let item1 = tableCard.item1
      let tipoItem1 = item1.valor.split('-')[0]
      if(tipoItem1 === 'virus'){
        let organo = tableCard.organo
        deckRoom.push(organo)
        deckRoom.push(item1)
        deckRoom.push(selectDeckCard.card)
        table.splice(selectTableCard.pos, 1)
        let deckPlayer = room.players[selectDeckCard.player].deck
        deckPlayer.splice(selectDeckCard.pos, 1)
        deckPlayer.push(deckRoom[0])
        deckRoom.shift()
        updateGame(key, room)
      }
      if(tipoItem1 === 'medicina'){
        deckRoom.push(item1)
        deckRoom.push(selectDeckCard.card)
        tableCard.item1 = null
        let deckPlayer = room.players[selectDeckCard.player].deck
        deckPlayer.splice(selectDeckCard.pos, 1)
        deckPlayer.push(deckRoom[0])
        deckRoom.shift()
        updateGame(key, room)
      }
    }
  }

  render() {
    let listMedicinaVirus = this.props.listMedicinaVirus.length===0? null : 
    this.props.listMedicinaVirus.map((obj, i) =>
      <Row key={i} style={{ paddingBottom: '10px' }}>
        <Col xs={1}>
          <Form.Check 
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
    if(this.props.listMedicinaVirus.length===0){
      messageModal = 'No se puede utilizar esta carta'
    }
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Tirar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listMedicinaVirus}
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

export default ModalMedicinaVirus;
