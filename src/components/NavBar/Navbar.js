import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import './Navbar.css';
import { thisExpression } from '@babel/types';



class Navbar extends React.Component {
  state = {
    loginModalOpen: false,
    SignupModalOpen: false,
  };

  handleLoginModalOpen = () => {
    this.setState((prevState) => {
      return {
        loginModalOpen: !prevState.loginModalOpen
      }
    });
  };

  handleSignupModalOpen = () => {
    this.setState((prevState) => {
      return {
        signupModalOpen: !prevState.signupModalOpen
      }
    });
  };

  render () {
    return (
      <>
      <Login 
      loginModalOpen={this.state.loginModalOpen}
      handleLoginModalOpen={this.handleLoginModalOpen}
      setCurrentUser={this.props.setCurrentUser} />
      <Signup 
      signupModalOpen={this.signupModalOpen}
      handleSignupModalOpen={this.handleSignupModalOpen}
      setCurrentUser={this.props.setCurrentUser}/>
      </>
    );
  };
};

export default withRouter(Navbar);