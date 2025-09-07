import React, { useState } from "react";
import { Button, Container, Form, InputGroup, Card, Row, Col, CardFooter } from "react-bootstrap";
import { useCourses } from "../courses/CoursesContext";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const { courses } = useCourses();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCourses = courses
    .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 3);
    const navigate = useNavigate();

  return (
    <Container className="my-5">
      <Form className="mb-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search for courses..."
            className="py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="button" variant="primary">
            Search
          </Button>
        </InputGroup>
      </Form>

      <Row className="g-3 justify-content-center">
        {filteredCourses.map((course) => (
          <Col key={course.id} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-sm border-0" style={{marginBottom:"5px", marginTop:"30px", backgroundColor:"#ffffff71"}}>
              <Card.Img
                variant="top"
                src={course.Image}
                style={{ height: "150px", objectFit: "cover", borderRadius: "8px" }}
              />
              <Card.Body className="p-2">
                <Card.Title style={{ fontSize: "1.5rem" }}>{course.name}</Card.Title>
                <Card.Text style={{ fontSize: "1.2rem", color: "#555" }}>
                  Instructor: {course.instructor}
                </Card.Text>
                <Card.Text style={{ fontSize: "1.2rem", color: "#555" }}>
                  {course.rating} | {course.price}
                </Card.Text>
              </Card.Body>
              <CardFooter style={{fontSize:"1.2rem"}}>
                <Button variant="primary" size="sm" className="w-100 mt-2" onClick={()=> navigate('/CourseList')}>
                  View Course
                </Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Searchbar;
