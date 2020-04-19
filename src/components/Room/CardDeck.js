import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart, 
  faBone, faLungs, faHeart, faBrain, faChild } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart,
  faBone, faLungs, faHeart, faBrain, faChild);

class CardDeck extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    let selectDeckCard = {
      card : this.props.card,
      player : this.props.player,
      pos : this.props.pos
    }
    this.props.onPressTirar(selectDeckCard)
  }

  render() {
    let card = this.props.card
    let disabled = this.props.disabled
    let colorStyle = {
      backgroundColor: '#c4a5f3',
      borderColor: '#9885b5'
    }
    if(card.valor.split('-')[1] === 'amarillo'){
      colorStyle = {
        backgroundColor: '#fff3cd',
        borderColor: '#ffeeba'
      }
    }
    if(card.valor.split('-')[1] === 'azul'){
      colorStyle = {
        backgroundColor: '#cce5ff',
        borderColor: '#b8daff'
      }
    }
    if(card.valor.split('-')[1] === 'verde'){
      colorStyle = {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb'
      }
    }
    if(card.valor.split('-')[1] === 'rojo'){
      colorStyle = {
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb'
      }
    }
    let icon = null
    if(card.valor.split('-')[0] === 'organo'){
      if(card.valor.split('-')[1] === 'amarillo'){
        icon = <FontAwesomeIcon icon="bone" size="2x" />
      }
      if(card.valor.split('-')[1] === 'azul'){
        icon = <FontAwesomeIcon icon="brain" size="2x" />
      }
      if(card.valor.split('-')[1] === 'verde'){
        icon = <FontAwesomeIcon icon="lungs" size="2x" />
      }
      if(card.valor.split('-')[1] === 'rojo'){
        icon = <FontAwesomeIcon icon="heart" size="2x" />
      }
      if(card.valor.split('-')[1] === 'jocker'){
        icon = <FontAwesomeIcon icon="child" size="2x" />
      }
    }
    if(card.valor.split('-')[0] === 'medicina'){
      icon = <FontAwesomeIcon icon="briefcase-medical" size="2x" />
    }
    if(card.valor.split('-')[0] === 'virus'){
      icon = <FontAwesomeIcon icon="virus" size="2x" />
    }
    if(card.valor.split('-')[0] === 'contagio'){
      icon = <FontAwesomeIcon icon="viruses" size="2x" />
    }
    if(card.valor.split('-')[0] === 'ladron'){
      icon = <FontAwesomeIcon icon="hand-holding-heart" size="2x" />
    }
    if(card.valor.split('-')[0] === 'transplante'){
      icon = <FontAwesomeIcon icon="sync-alt" size="2x" />
    }
    if(card.valor.split('-')[0] === 'guante'){
      icon = <FontAwesomeIcon icon="mitten" size="2x" />
    }
    if(card.valor.split('-')[0] === 'error'){
      icon = <FontAwesomeIcon icon="user-friends" size="2x" />
    }
    return (
      <Col xs={4}>
        <Card style={colorStyle} className="text-center">
          <Card.Body>
            {icon}
          </Card.Body>
          <Button variant="light" disabled={disabled} block onClick={this.onClick}>Tirar</Button>
        </Card>
      </Col>
    );
  }
}



export default CardDeck;
