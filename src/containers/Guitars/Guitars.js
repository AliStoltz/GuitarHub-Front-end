import React from 'react';
import Button from 'react-bootstrap/Button';
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
        <Button id="edit" name="edit-guitar" onClick={() => props.editGuitar(guitar)} variant="outline-secondary">Edit Post</Button>
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