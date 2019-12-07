import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class GuitarDetailsContainer extends Component{
  state = {
    detail: {},
  }

  componentDidMount() {
    this.getGuitar();
  }

  getGuitar = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/guitars/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({
        detail: res.data.data
      })
    })
    .catch((error) => console.log(error));
  }

  

  render() {
    return(
      <div>
        <img src={this.state.detail.photo}></img>
      </div>
    )
  }
};

export default withRouter(GuitarDetailsContainer);