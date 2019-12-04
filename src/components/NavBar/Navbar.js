import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

// import Login from '../Auth/Login';
// import Signup from '../Auth/Signup';
// import './Navbar.css';



class Navbar extends React.Component {
  state = {
    loginModalOpen: false,
    SignupModalOpen: false,
  };

  render () {
    return (
      <h1>Navbar</h1>
    );
  };
};

export default withRouter(Navbar);