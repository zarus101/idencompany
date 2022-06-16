import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carousels.css'

const Carousels = () => {
  return (
    <>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/carousel1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Virtual learning</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde maiores fugit expedita corporis ratione, eaque, adipisci cupiditate quia autem inventore ducimus. Amet eaque iure quo nesciunt repellat quia fugit itaque!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/image1.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Virtual Learning</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/image2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Virtual Learning</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Carousels