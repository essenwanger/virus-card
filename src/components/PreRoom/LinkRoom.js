import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

class LinkRoom extends React.Component {

  constructor(props) {
    super(props);
    this.onCopyLink = this.onCopyLink.bind(this);
  }

  onCopyLink(e) {
    this.linkInput.select();
    document.execCommand('copy');
    e.target.focus();
  }

  render() {
    let keyPlayer = this.props.keyPlayer
    let keyRoom = this.props.keyRoom
    let link = ''
    if(keyPlayer !== 'edit' && keyPlayer !== null){
      link = 'https://virus-card.firebaseapp.com/preroom/' + keyRoom + '/edit'
      //link = 'http://localhost:3000/preroom/' + keyRoom + '/edit'
    }
    return (
      <React.Fragment>
      {link !== '' &&
        <Row style={{paddingBottom: '10px'}}>
          <Col>
            <InputGroup>
              <FormControl type="text" value={link} readOnly ref={(linkInput) => this.linkInput = linkInput} />
              <InputGroup.Append>
                <Button variant="dark" onClick={this.onCopyLink}>Copiar Link</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      }
      </React.Fragment>
    );
  }
}

export default LinkRoom;
