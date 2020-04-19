import React from 'react';
import { /*Row, Col,*/ Form, Button, Modal } from 'react-bootstrap';
import {updateGame} from '../../logic/logicVirus'

class ModalError extends React.Component {

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
      select: changeEvent.target.value
    });
  }

  onClick(){
    let key = this.props.keyRoom
    let selectPlayer = this.state.select
    let selectDeckCard = this.props.selectDeckCard
    let room = this.props.room
    let deckRoom = room.deck
    let tableA = room.players[selectDeckCard.player].table
    let tableB = room.players[selectPlayer].table
    if(room.players[selectDeckCard.player].table === undefined){
      room.players[selectDeckCard.player].table = tableB
      room.players[selectPlayer].table = null
      deckRoom.push(selectDeckCard.card)
      let deckPlayer = room.players[selectDeckCard.player].deck
      deckPlayer.splice(selectDeckCard.pos, 1)
      deckPlayer.push(deckRoom[0])
      deckRoom.shift()
    }else{
      room.players[selectDeckCard.player].table = tableB
      room.players[selectPlayer].table = tableA
      deckRoom.push(selectDeckCard.card)
      let deckPlayer = room.players[selectDeckCard.player].deck
      deckPlayer.splice(selectDeckCard.pos, 1)
      deckPlayer.push(deckRoom[0])
      deckRoom.shift()
    }
    updateGame(key, room)
  }

  render() {
    let listError = this.props.listError.length===0? null : 
    this.props.listError.map((player, i) =>
      <Form.Check key={i} label={player.name} type={'radio'} 
      checked={this.state.select === player.key} value={player.key} onChange={this.onPressRadio}/>
    );
    let messageModal = null
    if(this.props.listError.length===0){
      messageModal = 'No se puede utilizar esta carta'
    }
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Tirar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listError}
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

export default ModalError;
