import React, { Component } from 'react';
import axios from 'axios';
import './SellerContainer.css';
import Guitars from '../Guitars/Guitars';
import GuitarPostForm from '../GuitarPostForm/GuitarPostForm';
import EditGuitarInfo from '../../components/EditGuitarInfo/EditGuitarInfo';
import DeleteGuitar from '../../components/DeleteGuitar/DeleteGuitar';


class SellerContainer extends Component {
  state = {
    profile: {},
    userGuitars: [],
    guitar: {},
    edit: false,
    deleteModalOpen: false,
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

  handleDeleteModalOpen = (guitar) => {
    this.setState((prevState) => {
      return {
        deleteModalOpen: !prevState.deleteModalOpen,
        guitar: guitar,
      };
    });
  };

  editGuitar = (guitar) => {
    this.setState({ 
      edit: true,
      guitar: guitar,
    })
  };

    // let newGuitarList = this.state.arr.filter(guitar => this.guitar._id !== this.guitar.id);
    // newGuitarList.push(guitar)
    // this.setState({arr:newGuitarList})

  updateState = (updatedGuitar) => {
    console.log(updatedGuitar)
    this.setState({
      profile: updatedGuitar,
      edit: false,
      userGuitars: [updatedGuitar, ...this.state.userGuitars],
    });
    this.componentDidMount();
  };

  // Create your handleAddNewGuitar method
  handleNewGuitar = (newGuitar) => {
    axios.post(`${process.env.REACT_APP_API_URL}/guitars/new`, newGuitar ,{
      withCredentials: true
    })
    .then((res) => {
      console.log(res.data.data);
      this.setState({
        userGuitars: [newGuitar, ...this.state.userGuitars] 
      })
    })
    .catch((error) => console.log(error));
    }
    

  render() {
    console.log(this.state.profile)
    return(
      <>
      <div>
        <h1>{this.state.profile.username}</h1>
        <p>{this.state.profile.location}</p>
      </div>
      <div className="user-profile">
        {this.state.edit ?
        <EditGuitarInfo guitar={this.state.guitar} updateState={this.updateState} userGuitars={this.state.userGuitars}/>
        : <GuitarPostForm 
        currentUser={this.props.currentUser} handleNewGuitar={this.handleNewGuitar} handleChange={this.handleChange}/> }
        <Guitars guitars={this.state.userGuitars} editGuitar={this.editGuitar} deleteModalOpen={this.state.deleteModalOpen} handleDeleteModalOpen={this.handleDeleteModalOpen}
         /> 
        <DeleteGuitar guitar={this.state.guitar} deleteModalOpen={this.state.deleteModalOpen} handleDeleteModalOpen={this.handleDeleteModalOpen}/>
        </div>
      </>
    )
  }
};

export default SellerContainer;