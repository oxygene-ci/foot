import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function BootstrapCarousel() {
  return (
    <Carousel controls={false} pause={false}>
      <Carousel.Item data-bs-interval="5">
        <img
          className="image d-block"
          src={require('./Assets/img1.jpeg')}
          alt="First slide"
          style={{height:500, width:2000}}
        />
      </Carousel.Item>
      <Carousel.Item data-bs-interval="5">
        <img
          className="image d-block"
          src={require('./Assets/img2.jpeg')}
          alt="Second slide"
          style={{height:500, width:2000}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;