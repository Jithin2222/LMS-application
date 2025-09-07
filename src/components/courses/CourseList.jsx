import React, { useState } from "react";
import {Button, Card, Col, Container, Form, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import { useCourses } from "./CoursesContext";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {courses} = useCourses();
  const navigate = useNavigate();
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <Navbar expand="lg" sticky="top" className="py-2" style={{backgroundColor:"#ffffff96",}} >
          <Container fluid className="px-3">
              <Navbar.Brand href="/home" className="fw-bold" style={{cursor:"pointer", fontSize: '1.5rem'}}>
                  <i className="bi bi-arrow-left-circle"></i>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className='align-items-center fw-bold'>
                    <Nav.Link href="/CoursePage">COURSES FROM INSTRUCTOR</Nav.Link>
                      <Nav.Link href="/freecourses">FREE COURSES</Nav.Link>
                      <Nav.Link href="/home">
                          <i class="bi bi-x-lg"></i>
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>

      <Container className="py-5">
        <Row className="align-items-center mb-4">
          <Col md={6}>
            <h1 className="fw-bold" style={{fontFamily:"Archivo Black"}}> Available Courses</h1>
          </Col>
          <Col md={6}>
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search for courses..."
                  className="py-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="primary">
                  <i className="bi bi-search py-2"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row className="g-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Col key={course.id} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-2 rounded-3" style={{backgroundColor:"#ffffff4f"}}>
                  <Card.Img
                    variant="top"
                    src={course.Image}
                    alt={course.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold">
                      <h3>{course.name}</h3>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {course.instructor}
                    </Card.Subtitle>
                    <Card.Text className="small text-muted">
                      <p>
                        {course.description}
                      </p>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-success">{course.price}</span>
                      <span className="text-warning">{course.rating}</span>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 d-flex justify-content-between">
                    <Button variant="outline-secondary" size="sm" onClick={()=> navigate(`/courses/${course.id}`)}>
                      View Details
                    </Button>
                    <Button variant="primary" size="sm" onClick={()=> navigate("/purchase", {state:{course}})}>
                      Enroll Now
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center text-muted">No courses found.</p>
            </Col>
          )}

            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 rounded-3 d-flex align-items-center justify-content-center text-center p-4">
                <Card.Body>
                  <h3 className="fw-bold text-muted"> More Subjects Coming Soon!</h3>
                  <p className="text-muted small">
                    Stay tuned for exciting new courses in AI, Cybersecurity, Mobile Development and more.
                  </p>
                </Card.Body>
              </Card>
            </Col>

        </Row>
      </Container>
    </>
  );
};

export default CourseList;
