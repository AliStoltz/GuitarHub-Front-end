import React,  { Component } from 'react';
import './Marketplace.css';
import MarketContainer from '../../containers/MarketContainer/MarketContainer';

class Marketplace extends Component {
  render() {

    return(
      <div className="market-container">
        <MarketContainer />
      </div>
    )
  }
};

export default Marketplace;