import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class DeleteGuitar extends Component {
  state = {
    confirmed: false,
    
  };

  handleDelete = (guitar) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/guitars/${guitar._id}`)
    .then((res) => {
      this.props.handleDeleteModalOpen();
      this.refreshPage();
    })
    .catch(error => console.log(error));
  };

  handleCancel = () => {
    this.props.handleDeleteModalOpen();
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <Modal show={this.props.deleteModalOpen} onHide={this.props.handleDeleteModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete this guitar?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={this.handleCancel} type="button" className="btn btn-dark">Cancel</button>
          <button onClick={() => this.handleDelete(this.props.guitar)} type="button" className="btn btn-danger">Yes</button>
        </Modal.Body>
      </Modal>
    );
  };
};

export default withRouter(DeleteGuitar);