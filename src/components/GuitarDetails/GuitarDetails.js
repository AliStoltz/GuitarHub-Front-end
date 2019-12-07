import React, { Component } from 'react';
import './GuitarDetails.css';
import GuitarDetailsContainer from '../../containers/GuitarDetailsContainer/GuitarDetailsContainer';

class GuitarDetails extends Component {

  render () {
    return (
      <div className="details-container">
        <GuitarDetailsContainer />
      </div>
    )
  }
};

export default GuitarDetails;