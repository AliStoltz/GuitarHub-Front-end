import React, { Component } from 'react';
import Guitars from '../Guitars/Guitars';
import axios from 'axios';

class VisibleGuitars extends Component {
  state = {
    guitars: [],
    filteredGuitars: [],
    lowPrice: '',
    highPrice: '',
  };

  componentWillMount() {
    this.setState({
      filteredGuitars: this.props.guitars,
      lowPrice: 30,
      highPrice: 100
    });
  };

  filteredByName = (guitarFilter) => {
    let filteredGuitars = this.state.guitars
    filteredGuitars = filteredGuitars.filter((guitar) => {
      let guitarName = guitar.name.toLowerCase()
      return guitarName.indexOf(
        guitarFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredGuitars
    })
  };

filteredByPrice(this.state.lowprice)

  filteredByPrice = (lowPrice, highPrice) => {

    return this.state.guitars.filter(guitar => {return guitar.price > this.state.lowPrice && guitar.price < this.state.highPrice})

    // let filteredGuitars = this.state.guitars
    // filteredGuitars = filteredGuitars.filter((guitar) => {
    //   if (guitar.price < lowPrice || guitar.price > highPrice) {
    //     return false
    //   } else {
    //     return true
    //   }
    // })
    // console.log(filteredGuitars)
  }

  render() {
    return (
      <Guitars guitars={this.state.filteredGuitars} match={this.props.match} onChange={this.filteredGuitars} />
    )
  }
};

export default VisibleGuitars;