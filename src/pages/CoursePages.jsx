import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Ratio, Navbar, Nav } from "react-bootstrap";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const approved = JSON.parse(localStorage.getItem("approvedCourses")) || [];
    setCourses(approved);
  }, []);

  return (
    <>
    <Navbar  expand="lg"  sticky="top"  className="py-2" style={{backgroundColor: "#ffffffc5",  }}>
        <Container fluid className="px-3">
          <Navbar.Brand
            href="/home"
            className="fw-bold"
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
            <i className="bi bi-arrow-left-circle"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center">
              <Nav.Link href="/home">
                <i class="bi bi-x-lg"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Container className="my-4">
      <h2>Available Courses</h2>
      {courses.length === 0 && <p>No courses available yet.</p>}

      <Row>
        {courses.map((course) => (
          <Col md={6} lg={4} key={course.id} className="mb-4">
            <Card className="shadow-sm h-100" style={{backgroundColor:"#ffffff5e"}}>
              <Card.Body>
                {course.videos.map((vid, idx) => (
                  <div key={idx} className="mb-2">
                    <h6>{vid.title}</h6>
                    <Ratio aspectRatio="16x9">
                      <iframe
                        src={`https://www.youtube.com/embed/${vid.id}`}
                        title={vid.title}
                        allowFullScreen
                      />
                    </Ratio>
                  </div>
                ))}
                <Card.Title>{course.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By {course.author} , ${course.price}
                </Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>    
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default CoursePage;
