import React from 'react';
import { Row, Col } from 'react-bootstrap';

class ListPlayer extends React.Component {

  render() {
    let listPlayer = this.props.list===null ? null : this.props.list.map((player, i) =>
      <Row key={i} style={{paddingBottom: '10px'}}>
        {player.creator ?
          <Col>{player.name} (Organizador)</Col> :
          <Col>{player.name}</Col>
        }
      </Row>
    );
    return (
      <React.Fragment>
      {listPlayer}
      </React.Fragment>
    );
  }
}

export default ListPlayer;
