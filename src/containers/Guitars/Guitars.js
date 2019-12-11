import React from 'react';
import Button from 'react-bootstrap/Button';
import './Guitars.css';

const Guitars = (props) => {
  console.log(props)
  const guitars = props.guitars.map(guitar => {
    return (
      <div className="guitar-card">
        <div className="image">
          <img className="guitar-img" src={guitar.photo} />
        </div>
        <div className="guitar-container">
          <h3>{guitar.name}</h3>
          <p>${guitar.price}.00</p>
          <p>Condition: {guitar.condition}</p>
          <Button id="edit" name="edit-guitar" onClick={() => props.editGuitar(guitar)} variant="outline-light">Edit Post</Button>
          <Button className='remove' onClick={() => props.handleDeleteModalOpen(guitar)} variant="outline-light">Delete</Button>
        </div>
      </div>
    )
  })


  return (
    <div className="user-guitars">
        {guitars}
    </div>
  )
}

export default Guitars;