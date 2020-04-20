import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardTable from './CardTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

library.add(faTrophy);

class ListCardTable extends React.Component {

  render() {
    let player = this.props.player
    let list = (player===null || player.table===undefined)? null : 
    player.table.map((card, i) =>
      <CardTable key={i} card={card}/>
    );
    let rowStyle1 = {
      
    }
    let rowStyle2 = {
      padding: '0.5em 0em', 
      borderBottom: '0.5px solid #333',
      minHeight: '90px'
    }
    let turno = null
    if(this.props.turn){
      rowStyle1 = {
        backgroundColor: '#e2e3e5'
      }
      rowStyle2 = {
        padding: '0.5em 0em', 
        borderBottom: '0.5px solid #333',
        minHeight: '90px',
        backgroundColor: '#e2e3e5'
      }
      turno = '(Turno)'
    }
    let win = this.props.player.win
    let winComponent = []
    if(win !== undefined){
      for (var i = 0; i < win; i++) {
        winComponent.push(<FontAwesomeIcon key={i} icon="trophy" size="1x" color="#D4AF37" />)
      }
    }
    return (
      <React.Fragment>
      <Row style={rowStyle1}>
        <Col>
          Cuerpo de {player.name} {turno} {winComponent}
        </Col>
      </Row>
      <Row style={rowStyle2}>
        {list}
      </Row>
      </React.Fragment>
    );
  }
}

export default ListCardTable;
