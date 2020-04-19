import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart, 
  faBone, faLungs, faHeart, faBrain, faChild } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart,
  faBone, faLungs, faHeart, faBrain, faChild );

class CardModal extends React.Component {

  render() {
    let card = this.props.card 
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
      </Card>
    );
  }
}

export default CardModal;
