import React, { Component } from 'react';
import './Landing.css';
// import hero from './hero.jpg';
import Guitar3 from './Guitar3.jpg';
import LandingCarousel from '../../containers/LandingCarouselContainer/LandingCarousel';
// import axios from 'axios';

class Landing extends Component  {

  render() {
  

  return(
    <div className="landing-container">
      <div className="hero">
          <img src={Guitar3} alt="hero"/>
        <div className="welcome">
          <h1>Welcome to GuitarHub</h1>
        </div>
      </div>
     
      <LandingCarousel guitars={this.props.guitars}/>
    </div>
  )
  }
};

export default Landing;