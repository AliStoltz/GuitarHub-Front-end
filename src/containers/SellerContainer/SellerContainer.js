import React, { Component } from 'react';
import axios from 'axios';
import './SellerContainer.css';
import Guitars from '../Guitars/Guitars';
import GuitarPostForm from '../GuitarPostForm/GuitarPostForm';

class SellerContainer extends Component {
  state = {
    profile: {},
    guitarFormOpen: false,
    userGuitars: [],
  }

  handleGuitarFormOpen = () => {
    this.setState((prevState) => {
      return {
        guitarFormOpen: !prevState.guitarFormOpen
      }
    });
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

    axios.get(`${process.env.REACT_APP_API_URL}/guitars/user`,{
      withCredentials: true,
    })
    .then(res => {
      console.log('USER GUITARS --->', res)
      this.setState({
        userGuitars: res.data.data,
      });
    })
    .catch(error => console.log(error));
  };


  render() {
    console.log(this.state.profile)
    return(
      <>
      <div>
        <h1>{this.state.profile.username}</h1>
        <p>{this.state.profile.location}</p>
      </div>
      <div className="user-profile">
      <GuitarPostForm guitarFormOpen={this.state.guitarFormOpen}
      handleGuitarFormOpen={this.handleGuitarFormOpen}
      currentUser={this.props.currentUser} />
      <Guitars guitars={this.state.userGuitars} />
      </div>
      </>
    )
  }
};

export default SellerContainer;