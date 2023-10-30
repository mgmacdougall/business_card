// import React from 'react';
import logo from '../images/react-icon-small.png'
import './Navbar.css';

function NavBar() {
  return(
    <>
      <header>
      <div className='logo-container'>
          <img src={logo} alt="React Logo" />
          <p>ReactFacts</p>
      </div>
      {/* <div> */}
        <div className='coursedetails'>
          <p className='course-title'>React Course - Project 1
            </p>
          </div>
        </header>
    </>
  )
}

export default NavBar;
