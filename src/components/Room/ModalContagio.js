import React from 'react';
import { Row, Col, Form, Button, Modal, Card } from 'react-bootstrap';
import {updateGame} from '../../logic/logicVirus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart, 
  faBone, faLungs, faHeart, faBrain, faChild } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart,
  faBone, faLungs, faHeart, faBrain, faChild );

class ModalContagio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listContagio: [],
      activeButton: false
    };
    this.onPressRadio = this.onPressRadio.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show && this.props.show) {
      this.setState({listContagio: this.props.listContagio, activeButton: false})
    }
  }

  onPressRadio(changeEvent){
    let listContagio = this.state.listContagio
    let selectContagio = listContagio[changeEvent.target.value]
    selectContagio.checked = !selectContagio.checked
    listContagio.forEach((contagio, i)=>{
      if(i !== Number.parseInt(changeEvent.target.value)){
        if(selectContagio.tableA.tableCard.item1.valor === contagio.tableA.tableCard.item1.valor){
          contagio.disabled = selectContagio.checked
        }
        if(selectContagio.tableB.tableCard.organo.codigo === contagio.tableB.tableCard.organo.codigo){
          contagio.disabled = selectContagio.checked
        }
      }
    })
    listContagio.forEach((contagioA, iA)=>{
      if(contagioA.checked){
        listContagio.forEach((contagioB, iB)=>{
          if(iA !== iB){
            if(contagioA.tableA.tableCard.item1.valor === contagioB.tableA.tableCard.item1.valor){
              contagioB.disabled = contagioA.checked
            }
            if(contagioA.tableB.tableCard.organo.codigo === contagioB.tableB.tableCard.organo.codigo){
              contagioB.disabled = contagioA.checked
            }
          }
        })
      }
    })
    let total = 0
    listContagio.forEach((contagio, i)=>{
      if(contagio.checked || contagio.disabled){
        total++
      }
    })
    this.setState({
      listContagio: listContagio,
      activeButton: (total===listContagio.length)
    })
  }

  onClick() {
    let listContagio = this.state.listContagio
    let key = this.props.keyRoom
    let room = this.props.room
    let deckRoom = room.deck
    listContagio.forEach((contagio, i)=>{
      if(contagio.checked){
        let tableA = contagio.tableA
        let tableB = contagio.tableB
        let cardA = room.players[tableA.player].table[tableA.pos]
        let cardB = room.players[tableB.player].table[tableB.pos]
        let virus = cardA.item1
        cardB.item1 = virus
        cardA.item1 = null
      }
    })
    let selectDeckCard = this.props.selectDeckCard
    deckRoom.push(selectDeckCard.card)
    let deckPlayer = room.players[selectDeckCard.player].deck
    deckPlayer.splice(selectDeckCard.pos, 1)
    deckPlayer.push(deckRoom[0])
    deckRoom.shift()
    updateGame(key, room)
  }

  cardStyle(card){
    let bodyCardStyle = {
      padding: '1.25rem 0.25rem'
    }
    let colorCardStyle = {
      backgroundColor: '#c4a5f3',
      borderColor: '#9885b5'
    }
    if(card !== null){
      if(card.valor.split('-')[1] === 'amarillo'){
        colorCardStyle = {
          backgroundColor: '#fff3cd',
          borderColor: '#ffeeba'
        }
      }
      if(card.valor.split('-')[1] === 'azul'){
        colorCardStyle = {
          backgroundColor: '#cce5ff',
          borderColor: '#b8daff'
        }
      }
      if(card.valor.split('-')[1] === 'verde'){
        colorCardStyle = {
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb'
        }
      }
      if(card.valor.split('-')[1] === 'rojo'){
        colorCardStyle = {
          backgroundColor: '#f8d7da',
          borderColor: '#f5c6cb'
        }
      }
    }
    let iconCard = null
    if(card !== null){
      if(card.valor.split('-')[0] === 'organo'){
        if(card.valor.split('-')[1] === 'amarillo'){
          iconCard = <FontAwesomeIcon icon="bone" size="1x" />
        }
        if(card.valor.split('-')[1] === 'azul'){
          iconCard = <FontAwesomeIcon icon="brain" size="1x" />
        }
        if(card.valor.split('-')[1] === 'verde'){
          iconCard = <FontAwesomeIcon icon="lungs" size="1x" />
        }
        if(card.valor.split('-')[1] === 'rojo'){
          iconCard = <FontAwesomeIcon icon="heart" size="1x" />
        }
        if(card.valor.split('-')[1] === 'jocker'){
          iconCard = <FontAwesomeIcon icon="child" size="1x" />
        }
      }
      if(card.valor.split('-')[0] === 'medicina'){
        iconCard = <FontAwesomeIcon icon="briefcase-medical" size="1x" />
      }
      if(card.valor.split('-')[0] === 'virus'){
        iconCard = <FontAwesomeIcon icon="virus" size="1x" />
      }
    }
    return (
      <Card style={colorCardStyle} className="text-center">
        <Card.Body style={bodyCardStyle}>
            {iconCard}
        </Card.Body>
      </Card>)
  }

  render() {
    let listContagio = this.state.listContagio.length===0? null : 
    this.state.listContagio.map((contagio, i) =>
      <Row key={i} style={{ paddingBottom: '10px' }}>
        <Col xs={1}>
        <Form.Check 
        type={'checkbox'} 
        disabled={contagio.disabled}
        checked={contagio.checked}
        onChange={this.onPressRadio}
        value={i}
        />
        </Col>
        <Col xs={2} style={{ paddingRight: '5px',paddingLeft: '5px' }}>
        {this.cardStyle(contagio.tableA.tableCard.item1)}
        </Col>
        <Col xs={4}>
        {contagio.tableB.name}
        </Col>
        <Col xs={2} style={{ paddingRight: '5px',paddingLeft: '5px' }}>
        {this.cardStyle(contagio.tableB.tableCard.organo)}
        </Col>
      </Row>
    );
    let messageModal = null
    if(this.state.listContagio.length===0){
      messageModal = 'No se puede utilizar esta carta'
    }
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Tirar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listContagio}
          {messageModal}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" disabled={!this.state.activeButton} onClick={this.onClick}>
            Seleccionar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalContagio;
