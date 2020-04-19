import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

class JoinRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      invalidName: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value, invalidName: false});
  }

  onClick() {
    if(this.state.name.length === 0){
      this.setState({invalidName: true})
    }else{
      this.props.onCreatePlayer(this.state.name)
    }
  }

  render() {
    return (
      <React.Fragment>
        {(this.props.keyPlayer === 'edit' && this.props.numberPlayer<6) &&
          <Row>
            <Col>
              <Form.Group>
                <Form.Control type="text" value={this.state.name} isInvalid={this.state.invalidName}
                onChange={this.handleChange} 
                placeholder="Ingresa tu apodo" />
              </Form.Group>
              <Button variant="info" block onClick={this.onClick}>Unirse</Button>
            </Col>
          </Row>
        }
      </React.Fragment>
    );
  }
}

export default JoinRoom;
