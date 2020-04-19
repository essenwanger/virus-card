import React from 'react';
import { Modal } from 'react-bootstrap';

class ModalAlert extends React.Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Tirar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.messageModal}
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalAlert;
