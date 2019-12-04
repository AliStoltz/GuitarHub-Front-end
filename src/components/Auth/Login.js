import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// import Modal from 'react-bootstrap/Modal';
// import './AuthForm.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,
    this.state, {
      withCredentials: true,
    })
    .then((res) => {
      this.props.setCurrentUser(res.data.data);
      this.props.history.push(`/users/${res.data.data}`);
      this.props.handleLoginModalOpen();
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <h1>modal</h1>
    )
  }
};

export default withRouter(Login);