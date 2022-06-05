
import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Mainnavbar.css'


const MainNavbar = () => {
  const [click, setClick]= useState(false)
  const [button , setButton ]= useState(true)


  const handleClick=()=> setClick(!click);
  const closeMobileMenu=()=> setClick(false);

  const showButton=()=>{
    if (window.innerWidth<=960){
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton)

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className="navbar-logo">
          IDEN 
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-meny active': 'nav-menu'}>
        <div class="dropdown show">
          <Link className='btn btn-secondary dropdown-toggle'role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
          Courses
          </Link>
  

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <Link className='dropdown-item'>Course1</Link>
    <Link className='dropdown-item'>Course2</Link>
    <Link className='dropdown-item'>Course3</Link>
    
  </div>
</div>
      
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign up
            </Link>
          </li>
        </ul>
        {/* {button  && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </div>
    </nav>

    
    </>
  )
}

export default MainNavbar