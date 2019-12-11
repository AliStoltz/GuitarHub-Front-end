import React from 'react';
import './LandingCarousel.css';
import "bootstrap/dist/css/bootstrap.min.css";


const LandingCarousel = (props) => {
  console.log(props)
  function shuffle(guitars) {
    guitars.sort(() => Math.random() -0.5);
  }
  shuffle(props.guitars);
  const guitars = props.guitars.map(guitar => {
  
    return (
      <>
      <div className="carousel-card">
        <h2 className="ahhh"> {guitar.name}</h2>
        <img className="guitarImg"src={guitar.photo} alt="guitar"/>
        <p>${guitar.price}.00</p>
      </div>
      </>
    )
  })

  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        { props.guitars.length ? 
        <>
        <div class="carousel-item active">
          <div className="row">
            <div className="col">{guitars[0]}</div>
            <div className="col">{guitars[1]}</div>
            <div className="col">{guitars[2]}</div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row">
            <div className="col">{guitars[3]}</div>
            <div className="col">{guitars[4]}</div>
            <div className="col">{guitars[5]}</div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="row">
            <div className="col">{guitars[6]}</div>
            <div className="col">{guitars[7]}</div>
            <div className="col">{guitars[8]}</div>
          </div>
        </div>
        </>
        :
        <p>Loading...</p>
        }

      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </>
  )
}

export default LandingCarousel;