import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, ListGroup, Badge, Accordion, Navbar, Nav } from "react-bootstrap";
import { useCourses } from "./CoursesContext";
// import { FaStar, FaCertificate, FaDownload, FaPlayCircle } from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useCourses();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <Container className="py-5 text-center text-light">
        <h2>Course not found</h2>
      </Container>
    );
  }

  const syllabus = [
    {
      week: "Week 1",
      title: "Introduction & Basics",
      topics: [
        "Getting started with the course",
        "Overview of tools & setup",
        "Basic concepts & terminology",
      ],
    },
    {
      week: "Week 2",
      title: "Intermediate Concepts",
      topics: [
        "Core features explained",
        "Hands-on exercises",
        "Mini project: Build a small app",
      ],
    },
    {
      week: "Week 3",
      title: "Advanced Topics",
      topics: [
        "Optimization techniques",
        "Real-world applications",
        "Capstone project introduction",
      ],
    },
  ];

  return (
    <>
    <div style={{ backgroundColor:"transparent", minHeight: "100vh", paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <Row className="g-4">
          <Col md={8}>
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden" style={{backgroundColor:"#ffffff59"}}>
              <Card.Img
                src={course.Image}
                alt={course.name}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold fs-2">{course.name}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  Instructor: <span className="fw-semibold">{course.instructor}</span>
                </Card.Subtitle>
                <p className="text-secondary">{course.description}</p>

                <h5 className="mt-4" >What you’ll learn</h5>
                <ListGroup className="mb-4 list-group-flush">
                  <ListGroup.Item><FaPlayCircle className="me-2 text-primary" /> Core fundamentals of {course.name}</ListGroup.Item>
                  <ListGroup.Item><FaCertificate className="me-2 text-success"/> Real-world projects & assignments</ListGroup.Item>
                  <ListGroup.Item><FaDownload className="me-2 text-info"/> Hands-on exercises with latest tools</ListGroup.Item>
                  <ListGroup.Item><FaCertificate className="me-2 text-warning"/> Certification upon completion</ListGroup.Item>
                </ListGroup>

                <h5 className="mt-4 mb-3">Course Syllabus</h5>
                <Accordion alwaysOpen flush>
                  {syllabus.map((module, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>
                        {module.week}: {module.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="mb-0 ps-3">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="text-secondary">{topic}</li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-lg border-0 rounded-4 p-4 sticky-top" style={{ top: "100px", backgroundColor:"#ffffff4d" }}>
              <h3 className="fw-bold text-success mb-3">{course.price}</h3>
              <p className="mb-2">
                <Badge bg="warning" text="dark" className="me-2">
                  <FaStar className="me-1" /> {course.rating}
                </Badge>
                <Badge bg="info">{course.level || "Beginner Friendly"}</Badge>
              </p>
              <p className="small text-muted mb-4">
                Enroll now to get lifetime access, downloadable resources, and a certificate of completion.
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-100 mb-3" 
                onClick={() => navigate("/purchase", { state: { course } })}
              >
                Enroll Now
              </Button>
              <Button 
                variant="outline-secondary" 
                size="lg" 
                className="w-100 mb-3"
                onClick={() => {
                  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
                  const exists = storedWishlist.find((c) => c.id === course.id);

                  if (!exists) {
                    storedWishlist.push(course);
                    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
                    alert("Course added to Wishlist!");
                  } else {
                    alert("Course already in Wishlist!");
                  }
                }}
              >
                Add to Wishlist
              </Button>
              <Button variant="warning" size="lg" className="w-100 mb-3" onClick={()=> navigate('/CourseList')}>
                  Go Back
              </Button>

              <hr className="my-4"/>

              <h6 className="fw-semibold">Course Features</h6>
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item>🎓 Certificate of completion</ListGroup.Item>
                <ListGroup.Item>📚 Lifetime access</ListGroup.Item>
                <ListGroup.Item>💻 Hands-on projects</ListGroup.Item>
                <ListGroup.Item>📄 Downloadable resources</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default CourseDetails;
