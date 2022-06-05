import React from 'react'
import { useParams } from 'react-router-dom'



const SingleCard = ({coursecategory}) => {
 const {title}= useParams();

 


   


  return (
   <>
  
   <section className='category'>
  <p class="section-subtitle"></p>

  <h2 class="section-title">Explore Popular Courses</h2>

  <div className="container">
  {coursecategory.filter(curElem => curElem.course_name===title).map((curElem, id)=>{
          return(
              <>
            <div className="row">
            
                    <div className="col-lg">
                        <div className="single-card-image">
                        <img src={curElem.image} alt="image" />

                        </div>
                    </div>
                
                    <div className="col-lg">
                        <div className="single-card-des">
                            <h1>{curElem.course_name}</h1>
                            <p>{curElem.course_des}</p>
                            <p>{curElem.course_main_des}</p>

                        </div>
                    </div>     
            </div> 
         </>
          )
         
      })}

  </div>
  </section>

   


   </>
  )
}

export default SingleCard
