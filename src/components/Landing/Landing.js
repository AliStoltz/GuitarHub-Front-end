import React, { Component } from 'react';
import './Landing.css';
import hero from './hero.jpg';
import LandingCarousel from '../../containers/LandingCarouselContainer/LandingCarousel';
import axios from 'axios';

class Landing extends Component  {

  state = {
    guitars: [],
  }

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

  render() {
    const guitars = this.state.guitars.map(guitar => {
      return (
        <div>
          <h2 className="ahhh"> {guitar.name}</h2>
          <img className="guitarImg"src={guitar.photo} alt="fuck"/>
        </div>
      )
    })

  return(
    <div className="landing-container">
      <div className="hero">
          <img src={hero} alt="hero"/>
      </div>
      <div>
        {guitars}
      </div>
    </div>
  )
  }
};

export default Landing;