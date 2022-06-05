import React, { useState } from 'react'
import CoursesCategoryApi from '../CourseCategoryApi'
import CourseCard from './CourseCard'
import './course.css'

const Course = () => {

    const [coursecategory, setCourseCategory]= useState(CoursesCategoryApi)

    const FilterItems=(category)=>{
        const updatedItems=CoursesCategoryApi.filter((curElem)=>{
          return curElem.category=== category;
  
        })
        setCourseCategory(updatedItems);
      }
  
  return (
    <>
    
  {/* main-course category starts */}
  <section className='category'>
  <p class="section-subtitle">Course Category</p>

  <h2 class="section-title">Explore Popular Courses</h2>

  <div className="container">
  <nav className='course-nav'>
      <div className="navbtn-group">
        <button className='navbtn-group__item active'  onClick={()=>{FilterItems("web-development")}}>Web-Development</button>
        <button className='navbtn-group__item' onClick={()=>{FilterItems("mobile-development")}}>Mobile-Development</button>
        <button className='navbtn-group__item ' onClick={()=>{FilterItems("digital-marketing")}}>Digital-Marketing</button>

    
      </div>

    </nav>



  
  </div>

  <div className="container">
    <div className="row justify-content-center">
      
  <CourseCard coursecategory={coursecategory}/>


    </div>
    
  </div>

  </section>
    </>
  )
}

export default Course