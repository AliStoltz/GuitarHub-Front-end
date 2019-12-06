import React, { Component } from 'react';
import axios from 'axios';
import './SellerContainer.css';
import SellerProfile from '../../components/SellerProfile/SellerProfile';

class SellerContainer extends Component {
  state = {
    profile: {},
  }

  componentDidMount() {
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
      withCredentials: true,
    })
    .then(res => {
      this.setState({
        profile: res.data.data,
      });
    })
    .catch(error => console.log(error));
  };


  render() {
    console.log(this.state.profile)
    return(
      <div>
        <h1>{this.state.profile.username}</h1>
        <p>{this.state.profile.location}</p>
      </div>
    )
  }
};

export default SellerContainer;