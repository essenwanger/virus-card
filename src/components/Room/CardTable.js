import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart, 
  faBone, faLungs, faHeart, faBrain, faChild } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart,
  faBone, faLungs, faHeart, faBrain, faChild );

class CardTable extends React.Component {

  render() {
    let card = this.props.card
    let bodyOrganStyle = {
      padding: '1.25rem 0.25rem'
    }
    let colorOrganStyle = {
      backgroundColor: '#c4a5f3',
      borderColor: '#9885b5'
    }
    if(card.organo.valor.split('-')[1] === 'amarillo'){
      colorOrganStyle = {
        backgroundColor: '#fff3cd',
        borderColor: '#ffeeba'
      }
    }
    if(card.organo.valor.split('-')[1] === 'azul'){
      colorOrganStyle = {
        backgroundColor: '#cce5ff',
        borderColor: '#b8daff'
      }
    }
    if(card.organo.valor.split('-')[1] === 'verde'){
      colorOrganStyle = {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb'
      }
    }
    if(card.organo.valor.split('-')[1] === 'rojo'){
      colorOrganStyle = {
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb'
      }
    }
    let iconOrgan = null
    if(card.organo.valor.split('-')[0] === 'organo'){
      if(card.organo.valor.split('-')[1] === 'amarillo'){
        iconOrgan = <FontAwesomeIcon icon="bone" size="2x" />
      }
      if(card.organo.valor.split('-')[1] === 'azul'){
        iconOrgan = <FontAwesomeIcon icon="brain" size="2x" />
      }
      if(card.organo.valor.split('-')[1] === 'verde'){
        iconOrgan = <FontAwesomeIcon icon="lungs" size="2x" />
      }
      if(card.organo.valor.split('-')[1] === 'rojo'){
        iconOrgan = <FontAwesomeIcon icon="heart" size="2x" />
      }
      if(card.organo.valor.split('-')[1] === 'jocker'){
        iconOrgan = <FontAwesomeIcon icon="child" size="2x" />
      }
    }
    let bodyStyle = {
      padding: '0.75rem'
    }
    let colorItem1Style = {
      backgroundColor: '#c4a5f3',
      borderColor: '#9885b5'
    }
    let iconItem1 = null
    if(card.item1!==undefined){
      if(card.item1.valor.split('-')[1] === 'amarillo'){
        colorItem1Style = {
          backgroundColor: '#fff3cd',
          borderColor: '#ffeeba'
        }
      }
      if(card.item1.valor.split('-')[1] === 'azul'){
        colorItem1Style = {
          backgroundColor: '#cce5ff',
          borderColor: '#b8daff'
        }
      }
      if(card.item1.valor.split('-')[1] === 'verde'){
        colorItem1Style = {
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb'
        }
      }
      if(card.item1.valor.split('-')[1] === 'rojo'){
        colorItem1Style = {
          backgroundColor: '#f8d7da',
          borderColor: '#f5c6cb'
        }
      }
      if(card.item1.valor.split('-')[0] === 'medicina'){
        iconItem1 = <FontAwesomeIcon icon="briefcase-medical" size="1x" rotation={90}/>
      }
      if(card.item1.valor.split('-')[0] === 'virus'){
        iconItem1 = <FontAwesomeIcon icon="virus" size="1x" rotation={90}/>
      }
    }
    let colorItem2Style = {
      backgroundColor: '#c4a5f3',
      borderColor: '#9885b5'
    }
    let iconItem2 = null
    if(card.item2!==undefined){
      if(card.item2.valor.split('-')[1] === 'amarillo'){
        colorItem2Style = {
          backgroundColor: '#fff3cd',
          borderColor: '#ffeeba'
        }
      }
      if(card.item2.valor.split('-')[1] === 'azul'){
        colorItem2Style = {
          backgroundColor: '#cce5ff',
          borderColor: '#b8daff'
        }
      }
      if(card.item2.valor.split('-')[1] === 'verde'){
        colorItem2Style = {
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb'
        }
      }
      if(card.item2.valor.split('-')[1] === 'rojo'){
        colorItem2Style = {
          backgroundColor: '#f8d7da',
          borderColor: '#f5c6cb'
        }
      }
      if(card.item2.valor.split('-')[0] === 'medicina'){
        iconItem2 = <FontAwesomeIcon icon="briefcase-medical" size="1x" rotation={90}/>
      }
      if(card.item2.valor.split('-')[0] === 'virus'){
        iconItem2 = <FontAwesomeIcon icon="virus" size="1x" rotation={90}/>
      }
    }
    return (
      <Col xs={2} style={{ paddingRight: '5px',paddingLeft: '5px' }}>
        <Card style={colorOrganStyle} className="text-center">
          <Card.Body style={bodyOrganStyle}>
            {iconOrgan}
          </Card.Body>
        </Card>
        {card.item1!==undefined &&
        <Card style={colorItem1Style} className="text-center">
          <Card.Body style={bodyStyle}>
            {iconItem1}
          </Card.Body>
        </Card>
        }
        {card.item2!==undefined &&
        <Card style={colorItem2Style} className="text-center">
          <Card.Body style={bodyStyle}>
            {iconItem2}
          </Card.Body>
        </Card>
        }
      </Col>
    );
  }
}

export default CardTable;
