import React, { Component } from 'react';
import Guitars from '../Guitars/Guitars';
import axios from 'axios';

class VisibleGuitars extends Component {
  state = {
    guitars: [],
    filteredGuitars: [],
  };

  componentWillMount() {
    this.setState({
      poets,
      filteredGuitars: guitars,
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

  filteredByPrice = (lowPrice, highPrice) => {
    let filteredGuitars = this.state.guitars
    filteredGuitars = filteredGuitars.filter((guitar) => {
      if (guitar.price < lowPrice || guitar.price > highPrice) {
        return false
      } else {
        return true
      }
    })
    this.setState({
      filteredGuitars
    })
  }

  render() {
    return (
      <Guitars guitars={this.state.filteredGuitars} match={this.props.match} onChange={this.filteredGuitars} />
    )
  }
};

export default VisibleGuitars;