import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import './Navbar.css';


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
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
        <div className="logo-container">
          {/* <img src={logo} /> */}
        </div>
        <span>GuitarHub</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
          {!this.props.currentUser ?
          <>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light nav-link" onClick={this.handleLoginModalOpen}>Log in<span className="sr-only">(current)</span></button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light nav-link nav-link" onClick={this.handleSignupModalOpen}>Sign up</button>
            </li>
            </> : <>
            <li className="nav-item">
              <a className="nav-link" onClick={this.handleProfileRedirect}>Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.props.logout}>Logout</a>
            </li>
            </>
          }
          </ul>
          {/* <form className="form-inline my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search" />
          </form> */}
        </div>
      </nav>
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