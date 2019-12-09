import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

import './GuitarDetialsContainer.css'

class GuitarDetailsContainer extends Component{
  state = {
    detail: {},
    user: {},
  }

  componentDidMount() {
    this.getGuitar();
  }

  getGuitar = () => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/guitars/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({
        detail: res.data.data,
        user: res.data.data.user
      })
      console.log(res.data.data.user)
    })
    .catch((error) => console.log(error));
  }

  

  render() {
    return(
      <>
      <div className="detial-image">
        <img src={this.state.detail.photo}></img>
      </div>
      <div className="detail-info">
        <h3>{this.state.detail.name}</h3>
        <br/>
        <p>${this.state.detail.price}.00</p>
        <br/>
        <p><em>Current Condition:</em> {this.state.detail.condition}</p>
        <br/>
        <p><em>Description:</em> {this.state.detail.description}</p>
        <p>posted by: {this.state.user.username}</p>
      </div>
      </>
    )
  }
};

export default withRouter(GuitarDetailsContainer);