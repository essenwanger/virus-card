import React from 'react';
import { Alert, Row, Col } from 'react-bootstrap';

class WarningRoom extends React.Component {

  render() {
    return (
      <Row style={{paddingTop: '20px'}}>
        <Col>
          <Alert variant="warning">
            <Alert.Heading>El juego aun no empieza</Alert.Heading>
            <p>
              Si todos los jugadores ya estan listos avisale al organizador para que empiece el juego
            </p>
          </Alert>
        </Col>
      </Row>
    );
  }
}

export default WarningRoom;
