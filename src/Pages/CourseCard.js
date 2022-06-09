import React from 'react'

// import { Link } from 'react-router-dom'
import './coursecard.css'



const CourseCard = ({coursecategory}) => {
  return (
   <>
<section className="card-section">
          {coursecategory.map((curElem, id)=>{
            return(
              <>
              
              <div class="col-lg-4 col-md-7 col-sm-8 cards">
              <div key={id} class="single-course text-center mt-30 wow " data-wow-duration="1s" data-wow-delay="0.2s">
               
                <div className="course-title"><h1>{curElem.course_name}</h1></div>
                <div className="course-info">
                  <div className="row">
                    <div className="col-sm layout">{curElem.course_dur_month}
                    </div>
                    <div className="col-sm layout">{curElem.course_dur_weeks}

                    </div>
                  </div>
                </div>
                {/* <div class="course-content mt-30">
                   
                    <div className="horizontal-line"></div>
                    <p><span className="status">{curElem.course_status}</span></p>
                    <p><span className="price">{curElem.course_price}</span></p>

                    <p class="text">{curElem.course_des}</p> */}
                    {/* <Link to={'/singlecard/' + curElem.course_name}> <button className="button button-primary"> */}
                  {/* <span ><b>Learn more</b></span> </button> </Link> */}
                {/* </div> */}
                <div class="course-image">
                  <div className="cardlogo">
                    <p>Awarded By</p>
                    <img src="./images/MUJ.svg" alt="" />
                    <i class="lni-baloon"></i>
                  </div>
                  
                </div>
            </div> 
        </div>
       
             </>
            )
          })}

   </section>
    </>
  )
}

export default CourseCard