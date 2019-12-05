import React from 'react';
import './Landing.css';
import hero from './hero.jpg';
import LandingCarousel from '../../containers/LandingCarouselContainer/LandingCarousel';

const Landing = (props) => {
  return(
    <div className="landing-container">
      <div className="hero">
          <img src={hero} alt="hero"/>
      </div>
      <div>
        <LandingCarousel />
      </div>
    </div>
  )
};

export default Landing;