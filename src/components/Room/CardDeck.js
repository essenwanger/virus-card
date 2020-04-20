import React from 'react';
import { Row, Col, Card, Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart, 
  faBone, faLungs, faHeart, faBrain, faChild, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcaseMedical, faVirus, faMitten, 
  faViruses, faSyncAlt, faUserFriends, faHandHoldingHeart,
  faBone, faLungs, faHeart, faBrain, faChild, faInfoCircle );

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
    let checked = this.props.checked
    let pos = this.props.pos
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
    let tooltip = null
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
      tooltip = (
        <Tooltip>
          Órgano
        </Tooltip>
      )
    }
    if(card.valor.split('-')[0] === 'medicina'){
      icon = <FontAwesomeIcon icon="briefcase-medical" size="2x" />
      tooltip = (
        <Tooltip>
          Medicina<br/>
          Las cartas de medicina sirven para proteger tus órganos de los virus.
        </Tooltip>
      )
    }
    if(card.valor.split('-')[0] === 'virus'){
      icon = <FontAwesomeIcon icon="virus" size="2x" />
      tooltip = (
        <Tooltip>
          Virus<br/>
          Usa las cartas de virus para destruir los órganos y medicinas de tus rivales.
        </Tooltip>
      )
    }
    if(card.valor.split('-')[0] === 'contagio'){
      icon = <FontAwesomeIcon icon="viruses" size="2x" />
      tooltip = (
        <Tooltip>
          Contagio<br/>
          Traslada tantos virus como puedas de tus órganos infectados a los órganos de los demás jugadores.
        </Tooltip>
      )
    }
    if(card.valor.split('-')[0] === 'ladron'){
      icon = <FontAwesomeIcon icon="hand-holding-heart" size="2x" />
      tooltip = (
        <Tooltip>
          Ladrón de Órganos<br/>
          Roba un órgano de otro jugador y añádelo a tu cuerpo.
        </Tooltip>
      )
    }
    if(card.valor.split('-')[0] === 'transplante'){
      icon = <FontAwesomeIcon icon="sync-alt" size="2x" />
      tooltip = (
        <Tooltip>
          Transplante<br/>
          Intercambia un órgano por otro entre dos jugadores cualesquiera.
        </Tooltip>
      )
    }
    if(card.valor.split('-')[0] === 'guante'){
      icon = <FontAwesomeIcon icon="mitten" size="2x" />
      tooltip = (
        <Tooltip>
          Guante de Látex<br/>
          Todos los jugadores, excepto el que utliza el guante, descartan su mano.
        </Tooltip>
      )
    }
    if(card.valor.split('-')[0] === 'error'){
      icon = <FontAwesomeIcon icon="user-friends" size="2x" />
      tooltip = (
        <Tooltip>
          Error Médico<br/>
          Intercambia todo tu cuerpo por el de otro jugador, incluyendo órganos, virus y vacunas.
        </Tooltip>
      )
    }
    return (
      <Col xs={4}>
        <Card style={colorStyle} >
          <Row>
            <Col style={{paddingLeft: '25px'}}>
              <Form.Check type={'checkbox'}  disabled={disabled} checked={checked} onChange={()=> this.props.onPressCheck(pos+1)} />
            </Col>
            <Col style={{paddingRight: '25px', textAlign: 'right'}}>
              <OverlayTrigger placement="top" overlay={tooltip}>
                <FontAwesomeIcon icon="info-circle" size="1x" />
              </OverlayTrigger>
            </Col>
          </Row>
          <Card.Body className="text-center" style={{paddingTop: '0.5rem'}}>
            {icon}
          </Card.Body>
          <Button variant="light" disabled={disabled} block onClick={this.onClick}>Jugar</Button>
        </Card>
      </Col>
    );
  }
}



export default CardDeck;
