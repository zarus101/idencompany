import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousels.css";

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
          <Carousel.Caption className="left-position">
            <div className="carousel-caption-1">
              <h1>Online degree from all the <br /> universities,<span> now at your fingertips</span></h1>
              <p>
                online graduate , post-graduate and certification programmes designed just for you.
              </p>
            </div>
            <button className="btn btn-dark">ENROLL NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/image1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="left-position">
            <div className="carousel-caption-1">
              <h1>Online degree from all the <br /> universities,<span> now at your fingertips</span></h1>
              <p>
                online graduate , post-graduate and certification programmes designed just for you.
              </p>
            </div>
            <button className="btn btn-dark">ENROLL NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/img_0.jpg"
            alt="Third slide"
          />
           <Carousel.Caption className="left-position">
            <div className="carousel-caption-1">
              <h1>Online degree from all the <br /> universities,<span> now at your fingertips</span></h1>
              <p>
                online graduate , post-graduate and certification programmes designed just for you.
              </p>
            </div>
            <button className="btn btn-dark">ENROLL NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
