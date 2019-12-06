import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import './GuitarPostForm.css'
import axios from 'axios';


class GuitarPostForm extends Component {
  state = {
    name: '',
    photo: '',
    condition: '',
    description: '',
    price: '',
    nameReq: true,
    photoReq: true,
    conditionReq: true,
    descriptionReq: true,
    priceReq: true,
    button: true,
  };

  checkRequiredFields = () => {
    let nameReq = true;
    let photoReq = true;
    let conditionReq = true;
    let descriptionReq = true;
    let priceReq = true;
    let button = true;

    if (this.state.name.length > 0) {
      nameReq = false;
    }
    if (this.state.photo.length < 10 === false) {
      photoReq = false;
    }
    if (this.state.condition.length > 0) {
      conditionReq = false;
    }
    if (this.state.description.length < 10 === false) {
      descriptionReq = false;
    }
    if (this.state.price.length > 0) {
      priceReq = false;
    }
    if (!nameReq && !photoReq && !conditionReq && !descriptionReq && !priceReq) {
      button = false;
    }
    this.setState({nameReq,photoReq,conditionReq,descriptionReq,priceReq,button});
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, this.checkRequiredFields);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/guitars/new`,
    this.state, {
      withCredentials: true
    })
    .then((res) => {
      this.props.handleGuitarFormOpen();
    })
    .catch((error) => console.log(error));
  }

  render () {
    return (
      // <Modal show={this.props.guitarFormOpen} onHide={this.props.handleGuitarFormOpen}>
      // <Modal.Header closeButton>
      //   <Modal.Title>Post a Guitar</Modal.Title>
      // </Modal.Header>
      // <Modal.Body>
      <div className="guitar-form">
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlFor="name">Type of Guitar</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} minLength="1" maxLength="200" />
            {this.state.nameReq === false ? null : <small className="error-msg">Please add a guitar type.</small>}
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo URL</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="photo" name="photo" value={this.state.photo} />
            {this.state.photoReq === false ? null : <small className="error-msg">Please add a photo.</small>}
          </div>
          <div className="form-group">
            <label htmlFor="condition">Current condition</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="condition" name="condition" value={this.state.condition} minLength="1" maxLength="200" />
            {this.state.conditionReq === false ? null : <small className="error-msg">Please add the current condition.</small>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Guitar Details</label>
            <textarea onChange={this.handleChange} className="form-control form-control-lg" type="text" id="description" name="description" value={this.state.description} required />
            {this.state.descriptionReq === false ? null : <small className="error-msg">Please add a detailed description.</small>}
          </div>
          <div className="form-group">
            <label htmlFor="price">Asking price</label>
            <textarea onChange={this.handleChange} className="form-control form-control-lg" type="text" id="price" name="price" value={this.state.price} required />
            {this.state.priceReq === false ? null : <small className="error-msg">Please add the price.</small>}
          </div>
          <button className="btn btn-primary float-right" type="submit" disabled={this.state.button}>Post</button>
        </form>
      </div>
    //   </Modal.Body>
    // </Modal>
    )
  }
}

export default GuitarPostForm;