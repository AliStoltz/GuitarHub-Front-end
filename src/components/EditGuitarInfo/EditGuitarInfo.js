import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import './EditGuitarInfo.css';

class EditGuitarInfo extends Component {
  state = {
    name: '',
    Photo: '',
    condition: '',
    description: '',
    price: '',
  }

  componentDidMount() {
    this.setState({
      name: this.props.guitar.name,
      photo: this.props.guitar.photo,
      condition: this.props.guitar.condition,
      description: this.props.guitar.description,
      price: this.props.guitar.price,
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  saveChanges = (event) => {
    console.log('clicked save ----->')
    const guitarId = this.props.guitar._id;
    event.preventDefault();
    let body = {
      name: this.state.name,
      photo: this.state.photo,
      description: this.state.description,
      price: this.state.price,
    }
    axios.put(`${process.env.REACT_APP_API_URL}/guitars/${guitarId}`, body, {
      withCredentials: true,
    })
    .then((res) => {
      this.props.updateState(body);
      this.setState({
        userGuitars: this.state.userGuitars
      })
    })
    .catch((error) => console.log(error));
  };

  render () {

    return (
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
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="price" name="price" value={this.state.price} required />
            {this.state.priceReq === false ? null : <small className="error-msg">Please add the price.</small>}
          </div>
          <Button id="save" name="save-guitar" onClick={this.saveChanges} variant="outline-secondary">Save Changes</Button>
        </form>
      </div>
    )
  }
};

export default EditGuitarInfo;