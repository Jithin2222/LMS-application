import React, { useState } from 'react'
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const NavPage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" sticky="top"  className="py-2" style={{ backgroundColor:"#ffffffc4"}}>
        <Container fluid className="px-3">
          <Navbar.Brand href="/home" className="fw-bold">EDU - LEARNING</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className='align-items-center'>
              <Nav.Link href="/CourseList" >COURSES</Nav.Link>        
              <NavDropdown title="SUPPORT" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Service</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/profile' onClick={()=> navigate('/Profile')} >PROFILE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavPage;