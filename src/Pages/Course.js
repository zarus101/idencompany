import React, { useState } from 'react'
import CoursesCategoryApi from '../CourseCategoryApi'
import CourseCard from './CourseCard'
import './course.css'

const Course = () => {
  const [click, setClick]= useState(false)

    const [coursecategory, setCourseCategory]= useState(CoursesCategoryApi)

    const handleClick=()=> setClick(!click);

    const FilterItems=(category)=>{
        const updatedItems=CoursesCategoryApi.filter((curElem)=>{
          return curElem.category=== category;
  
        })
        setCourseCategory(updatedItems);
      }
  
  return (
    <>
    
  {/* main-course category starts */}
  <section className='course-section'>
  <div className="container">
    <div className="programText">
  <h1 class="section-subtitle"> <span> Programmes </span>equipped for the future</h1>

  <p class="section-title">Our programmes are comprehensive educational experiences that develop and enhance skill sets that can be applied to diverse job profiles</p>
  </div>
  
  <nav className='course-nav'>
      <div className="navbtn-group">
        <button className='navbtn-group__item active'  onClick={()=>{FilterItems("web-development")}}>Bachelor's Degree</button>
        <button className='navbtn-group__item' onClick={()=>{FilterItems("mobile-development")}}>Master Degree</button>
        <button className='navbtn-group__item ' onClick={()=>{FilterItems("digital-marketing")}}>Professional Certificate</button>

    
      </div>

    </nav>



  
  

 
    <div className="row ">
      
      <CourseCard coursecategory={coursecategory}/>
     
      
  


    </div>
    </div>
 

  </section>
    </>
  )
}

export default Course