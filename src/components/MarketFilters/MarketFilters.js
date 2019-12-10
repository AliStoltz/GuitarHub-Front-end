import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './MarketFilters.css';


class MarketFilters extends Component {
  state = {
    guiterFilter: '',
  };

  handleFilterClick = (event) => {
    this.props.setLowHighPrice(event.target.getAttribute('data-lowPrice'), event.target.getAttribute('data-highPrice'));
  }


  render() {
    return (
      <aside>
        <form onSubmit={this.props.filteredByName}>
          <label htmlFor="filter">Filter by Name: </label>
          <input type="text" id="filter" value={this.props.guitarFilter} onChange={this.props.handleChange} />
        </form>
        <br/>
        <ul>
          <p>Sort by Price:</p>
          <button data-lowPrice={30} data-highPrice={100} onClick={this.handleFilterClick}>$30-$100</button>
          <br/>
          <button data-lowPrice={100} data-highPrice={500} onClick={this.handleFilterClick}>$100-$500</button>
          <br/>
          <button data-lowPrice={500} data-highPrice={1000} onClick={this.handleFilterClick}>$500-$1,000</button>
          <br/>
          <button data-lowPrice={1000} data-highPrice={5000} onClick={this.handleFilterClick}>$1,000-$5,000</button>
        </ul>
        <Button id="reset" name="reset-filters" onClick={this.props.resetFilters} variant="dark">Reset</Button>
      </aside>
    )
  }
};

export default MarketFilters;