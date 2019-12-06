import React from 'react';
import './MarketContainer.css';
import MarketFilters from '../MarketFilters/MarketFilters';


const MarketContainer = (props) => {
  console.log(props)
  const guitars = props.guitars.map(guitar => {
    return (
      <div className="market-card">
        <img className="market-img" src={guitar.photo} alt="guitar"/>
        <div className="market-container">
          <h4><b>{guitar.name}</b></h4>
          <p>${guitar.price}.00</p>
        </div>
      </div>
    )
  })

  return (
    <>
    <div className="market">
      <MarketFilters /> 
      {guitars}
      
    </div>
    
    </>
  )
  
}

export default MarketContainer;

