import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <>
    <section className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1>Enjoy with us</h1>
                    <p>Interested to join our courses?Share your details and we'll get back to you.</p>
                </div>
                <div className="col-sm">
                    <form>
                 
                    <div class="form-group">
                        
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    
                    </form>
                    <button className='btn btn-warning'> Enroll Now</button>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Contact