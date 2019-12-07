import React, { Component } from 'react';
import './SellerProfile.css';
import SellerContainer from '../../containers/SellerContainer/SellerContainer';



class SellerProfile extends Component {


  render () {
    return (
      <div className="seller-container">
        <SellerContainer />
      </div>
    )
  }
};

export default SellerProfile;