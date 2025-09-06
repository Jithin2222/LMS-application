import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

const CoursePage = () => {

    
  return (
    <>
        <Navbar expand="lg" sticky="top" className="py-2" style={{backgroundColor:"lightgrey", background: "linear-gradient(90deg, #a8e6f0 0%, #f6d5b3 50%, #f9a87b 100%)"}} >
                <Container fluid className="px-3">
                    <Navbar.Brand href="/home" className="fw-bold" style={{cursor:"pointer", fontSize: '1.5rem'}}>
                        <i className="bi bi-arrow-left-circle"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className='align-items-center'>
                            <Nav.Link href="#">
                                <i class="bi bi-search"></i>
                            </Nav.Link>
                            <Nav.Link href="#">Instructor Info</Nav.Link>
                            <Nav.Link href="#">Forum</Nav.Link>
                            <Nav.Link href="#">
                                <i className="bi bi-bookmark"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        <Container>
            <h1>Courses available</h1>
            <Row>
                <Col md={3}>

                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CoursePage