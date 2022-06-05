import React from 'react'
import "./testimonials.css"

const Testimonials = () => {
  return (
    <section className="testi-section">
        <div className="">
            <div className="testi-header">
                <h1>Hear from our <span>learners</span></h1>
            </div>
            <div className="row">
                <div className="col-sm left-side">
                    <div className="text">
                    <p>As a working woman, managing studies with family responsibilities is very important to me and MUJ supported me to achieve my goals with ease. It is helping me grow in my career by providing high quality business education where we get to participate in open house discussions, live guest lectures, and webinars from top notch industry experts. Faculty members are very well info
                        rmed and keep students engaged with continuous support and professional training</p>
                    </div>    
                </div>
                <div className="col-sm right-side" >
                    <div className="right-block">
                        <div className="testimonial-img">
                            <img src="" alt="" />
                        </div>
                        <div className="testimonial-text">
                            <div className="name">Suraj Thapaliya</div>
                            <div className="designation">React-Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials