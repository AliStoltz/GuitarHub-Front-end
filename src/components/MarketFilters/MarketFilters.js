import React, { Component } from 'react';
import './MarketFilters.css';


class MarketFilters extends Component {
  state = {
    guiterFilter: '',
  };


  handleChange = (event) => {
    this.setState({
      guitarFilter: event.target.value
    })
    this.props.onChange(event.target.value)
  };

  render() {
    return (
      <aside>
        <ul>
          <label htmlFor="filter">Filter by Name: </label>
          <input type="text" id="filter" value={this.state.guitarFilter} onChange={this.handleChange} />
        </ul>
        <ul>
          <button></button>
        </ul>
      </aside>
    )
  }
};

export default MarketFilters;