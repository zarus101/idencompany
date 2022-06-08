import React from 'react'
import MainNavbar from './MainNavbar'
import "./homepage.css"
import { Carousel } from 'react-bootstrap'
import Numbers from './Numbers'
import Advantage from './Advantage'
import Course from './Course'
import Footer from './Footer'
import Contact from './Contact'
import Gradient from './Gradient'
import Testimonials from './Testimonials'
import Virtual from './Virtual'
import IndiaStudy from './IndiaStudy'



const HomePage = () => {
  return (
   <>
   <MainNavbar/>
   <Carousel className='carousel'>
  <Carousel.Item className='carousel-item'>
    <img
      className="d-block w-100"
      src="./images/carousel1.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='car-caption'>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/carousel2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/carousel3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Numbers/>
<Virtual/>
<IndiaStudy/>
<Advantage/> 
<Course/>
<Gradient/>
<Testimonials/>
<Contact/>
<Footer/>
   </>
  )
  
}

export default HomePage