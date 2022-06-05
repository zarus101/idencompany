import React from 'react'
import './gradient.css'

const Gradient = () => {
  return (
      <>
      <section className="gradientSection">
          <div className="container">
              <div className="row">
                  <div className="col-sm">
                      <div className="section-heading">
                          <h1>Easy financing options</h1>
                          <p>We offer easy financing with no-cost EMIs to help you fund your education so you don't encounter cost as a barrier.</p>
                      </div>
                  </div>
                  <div className="col-sm right">
                  <div className="section-heading">
                          <h1>Attractive scholarships</h1>
                          <p>We offer scholarships for defence personnel, government employees, differently-abled people, and meritorious students.</p>
                      </div>
                  </div>
              </div>
              <div className="gradient-footer">
                  <p>These financial aids coupled with a convenient payback plan make Online Manipal an affordable choice.</p>
              </div>
          </div>
      </section>
      </>
    
  )
}

export default Gradient