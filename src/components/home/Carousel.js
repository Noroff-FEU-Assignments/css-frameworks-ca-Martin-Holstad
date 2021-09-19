import React from 'react'
import Carousel from "react-bootstrap/Carousel"

function ImageSlider() {
  return (
    <Carousel className="mb-5" activeIndex={1} indicators={true} controls={false} interval={null} fade={true}>
      <Carousel.Item>
        <div>
          <img src="images/carousel-images/carousel-2.jpg" alt="old camera" />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img src="images/carousel-images/carousel-1.jpg" alt="bike in room with old tv`s" />
        </div>
      </Carousel.Item>

      <Carousel.Item >
        <div>
          <img src="images/carousel-images/carousel-3.jpg" alt="rusty tv frame" />
        </div>

      </Carousel.Item>
    </Carousel>

  )
}

export default ImageSlider
