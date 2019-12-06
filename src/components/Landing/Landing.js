import React, { Component } from 'react';
import './Landing.css';
import hero from './hero.jpg';
import LandingCarousel from '../../containers/LandingCarouselContainer/LandingCarousel';
// import axios from 'axios';

class Landing extends Component  {

  render() {
  

  return(
    <div className="landing-container">
      <div className="hero">
          <img src={hero} alt="hero"/>
      </div>
      <LandingCarousel guitars={this.props.guitars}/>
    </div>
  )
  }
};

export default Landing;