import React, { Componenet, Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class PurchaseGuitar extends Component {
  state = {
    addToCart: false,
  };

 handleModalYes = () => {
  this.props.handlePurchase();
  this.props.handlePurchaseCancel();
 }

  render() {
    return(
      <Modal show={this.props.purchaseModalOpen} onHide={this.props.handlePurchaseModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Would you like to add this guitar to your cart?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={this.props.handlePurchaseCancel} type="button" className="btn btn-dark">Cancel</button>
          <button onClick={this.handleModalYes} type="button" className="btn btn-danger">Yes</button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default withRouter(PurchaseGuitar);