import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './advantage.css'

const Advantage = () => {
  return (
      <>
      <section className="advantage_section">
          <div className="container">
            <div class="onlineTextDiv">
                <h2 class="section-title">The Online Manipal <span class="fontBold orangeColor">advantage</span></h2>
                <p class="p greyColor">Here's what you can expect from our programmes</p>
            </div>
            <CardGroup>
  <Card>
    <Card.Img  variant="top" src="./images/logo1.png" />
    <Card.Body>
      <Card.Title>Empowered Education</Card.Title>
     
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Read More</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  variant="top" src="./images/logo2.png" />
    <Card.Body>
      <Card.Title>Learn at your pace</Card.Title>
      
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Read more</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  variant="top" src="./images/logo3.png" />
    <Card.Body>
      <Card.Title>Experiences faculty members & real world mentors</Card.Title>
   
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Read more</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img  variant="top" src="./images/logo4.png" />
    <Card.Body>
      <Card.Title>Enhances Digital learning Platform</Card.Title>
   
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Read more</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
      </section>
      </>
  )
}

export default Advantage