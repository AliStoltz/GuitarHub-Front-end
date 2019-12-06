import React from 'react';
import './Guitars.css';

const Guitars = (props) => {
  console.log(props)
  const guitars = props.guitars.map(guitar => {
    return (
      <div className="guitar-card">
        <img className="guitar-img" src={guitar.photo} />
        <div className="guitar-container">
          <h3>{guitar.name}</h3>
          <p>{guitar.description}</p>
        </div>
      </div>
    )
  })


  return (
    <div className="user-guitars">
      <div>
        {guitars}
      </div>
    </div>
  )
}

export default Guitars;