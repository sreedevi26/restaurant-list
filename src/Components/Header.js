import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
        <div className='container-fluid '>
          <Navbar.Brand href="/" className='d-flex align-items-center '>
            <img
              alt=""
              src="https://cdn1.vectorstock.com/i/1000x1000/98/50/restaurant-logo-design-template-icon-vector-23329850.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
            />{' '}
           <span className='fs-4 fw-bolder'> De Cafes</span>
          </Navbar.Brand>
        </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header