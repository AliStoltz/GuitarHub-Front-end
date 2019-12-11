import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Routes from './config/Routes';
import Navbar from './components/NavBar/Navbar';

import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    guitars: [],
    lowPrice: '',
    highPrice: '',
    guitarFilter: '',
    cart: 0,
  };


  componentDidMount() {
    this.test();
  };

  test = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/guitars/all`)
    .then((res) => {
      console.log(res.data);
      this.setState({
        guitars: res.data.data
      })
    })
    .catch((err) => console.log(err));
  };

    handleChange = (event) => {
    this.setState({
      guitarFilter: event.target.value
    })
  };

  filteredByName = (event) => {
    event.preventDefault();
    let guitars = [...this.state.guitars];

    const filteredGuitars = guitars.filter((guitar) => {
      console.log(guitar);
      return (guitar.name.toLowerCase().search(new RegExp(this.state.guitarFilter.toLowerCase())) !== -1);
    });

    console.log('Filtered Guitars ---> ', filteredGuitars);
    this.setState({
      guitars: filteredGuitars,
    })

  };

  setLowHighPrice = (low, high) => {
    const lowPrice = Number(low);
    const highPrice = Number(high);

    const filteredGuitars = this.state.guitars.filter(guitar => {
        console.log(guitar.price, highPrice, lowPrice);
        return guitar.price >= lowPrice && guitar.price <= highPrice
      });

    console.log('FILTERED GUITARS = ', filteredGuitars);
    this.setState({
      guitars: filteredGuitars,
    })
  };

  resetFilters = () => {
    this.test();
  }

  handlePurchase = () => {
    console.log('cart added')
    this.setState({
      cart: this.state.cart +1,
    })
  } 

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, 
    { withCredentials: true })
      .then(res => {
        localStorage.removeItem('uid');
        this.setState({ currentUser: null });
        this.props.history.push('/');
        this.state.cart = 0;
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <Navbar
        currentUser={this.state.currentUser}
        setCurrentUser={this.setCurrentUser}
        logout={this.logout} 
        handlePurchase={this.handlePurchase}
        cart={this.state.cart}/>
        <Routes
        currentUser={this.state.currentUser}
        setCurrentUser={this.setCurrentUser} 
        guitars={this.state.guitars} 
        setLowHighPrice={this.setLowHighPrice} 
        resetFilters={this.resetFilters} 
        handleChange={this.handleChange}
        filteredByName={this.filteredByName}
        handlePurchase={this.handlePurchase}
        />
      </div>
    );
  }
}

export default withRouter(App);