import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <section className="footer-section">
    <div class="container">
  <div class="row">
    <div class="col-sm">
        <ul>
            <li className="useful_links">Home</li>
            <li className="useful_links">Student Experience</li>
            <li className="useful_links">About Us</li>
            <li className="useful_links">Help Centre</li>
            <li className="useful_links">Blogs</li>
        </ul>
      
    </div>
    <div class="col-sm">
        <h3>Online Courses</h3>
        <ul>
            <li className="useful_links">Management</li>
            <li className="useful_links">Information Technology</li>
            <li className="useful_links">Commerce</li>
            <li className="useful_links">Data Science</li>
            <li className="useful_links">Business Analytics</li>
        </ul>
      

    </div>
    <div class="col-sm">
    <ul>
            <li className="useful_links">Media & Journalism</li>
            <li className="useful_links">Cloud Computing</li>
            <li className="useful_links">About Us</li>
            <li className="useful_links">Help Centre</li>
            <li className="useful_links">Blogs</li>
        </ul>
      


     
    </div>
    
    <div class="col-sm">
    <ul>
            <li className="useful_links">Location: Koteshwor, Kathmandu</li>
            <li className="useful_links">Contact No: 982363426 </li>
           
        </ul>
      

     
    </div>
  </div>
</div>
<div className="horizontal-line">
  </div>
  <div className="last-footer">
      <div className="container">
      <h3>© IDEN 2022</h3>

      </div>
  </div>

    </section>
    </>
  )
}

export default Footer