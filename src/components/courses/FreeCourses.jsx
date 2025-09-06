import React from 'react';
import { Card, Col, Container, Nav, Navbar, Row, Button, Badge } from 'react-bootstrap';

const FreeCourses = () => {

  const freeCourses = [
    { id:1, title: "Next.js Basics", instructor: "Dee Lorean", description: "Learn Next.js fundamentals for beginners.", rating: 4.5, thumbnail: "https://tse3.mm.bing.net/th/id/OIP.NpXbFHFLzJRMZUSx1W-ZlgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", URL:"https://www.youtube.com/watch?v=_EgI9WH8q1A" },
    { id:2, title: "React Hooks", instructor: "Jane Doe", description: "Deep dive into React Hooks and their applications.", rating: 4.7, thumbnail: "https://wallpaperbat.com/img/641236-react-native-wallpaper.png", URL:"https://www.youtube.com/watch?v=TNhaISOUy6Q"},
    { id:3, title: "JavaScript ES6", instructor: "John Smith", description: "Master modern JavaScript features.", rating: 4.6, thumbnail: "https://tse1.mm.bing.net/th/id/OIP.k5Xas2eeUAAWnz23YB-qfwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", URL:"https://www.youtube.com/watch?v=3PHXvlpOkf4"},
    { id:4, title: "CSS Flexbox & Grid", instructor: "Emily Rose", description: "Layout techniques using Flexbox and Grid.", rating: 4.8, thumbnail: "https://tse1.mm.bing.net/th/id/OIP.iHlscmZVkm1VQWPR5KhgmwHaD-?r=0&w=930&h=500&rs=1&pid=ImgDetMain&o=7&rm=3", URL:"https://www.youtube.com/watch?v=JJSoEo8JSnc"},
    { id:5, title: "Node.js Fundamentals", instructor: "Alan Walker", description: "Build server-side applications with Node.js.", rating: 4.4, thumbnail: "https://tse2.mm.bing.net/th/id/OIP.zXKOI6gIPB1_YAmKhubspgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", URL:"https://www.youtube.com/watch?v=TlB_eWDSMt4"},
    { id:6, title: "TypeScript Intro", instructor: "Sara Connor", description: "Learn TypeScript for safer JavaScript.", rating: 4.6, thumbnail: "https://tse4.mm.bing.net/th/id/OIP.t0QtbHtOLq1o8SnNt2Is-QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", URL:"https://www.youtube.com/watch?v=BwuLxPH8IDs"},
    { id: 7, title: "CSS Flexbox & Grid", instructor: "Rachel Green", description: "Layout techniques using Flexbox and Grid for responsive design.", rating: 4.7, thumbnail: "https://tse1.mm.bing.net/th/id/OIP.iHlscmZVkm1VQWPR5KhgmwHaD-?r=0&w=930&h=500&rs=1&pid=ImgDetMain&o=7&rm=3", URL: "https://www.youtube.com/watch?v=wsTv9y931o8"},
    { id: 8, title: "Vue.js Crash Course", instructor: "Mark Wilson", description: "Learn Vue.js fundamentals and build reactive web applications.", rating: 4.5, thumbnail: "https://wallpaperbat.com/img/9750748-vue-js-wallpaper-top-free-vue-js.jpg", URL: "https://www.youtube.com/watch?v=VeNfHj6MhgA"},
    { id: 9, title: "Django Web Framework", instructor: "Linda Brown", description: "Build web applications quickly using Python's Django framework.", rating: 4.6, thumbnail: "https://iq.opengenus.org/content/images/2019/07/3654e7e5cd4023d6a65bb172fb178be0.jpg", URL: "https://www.youtube.com/watch?v=rHux0gMZ3Eg"},
    { id: 10, title: "Bootstrap 5 Crash Course", instructor: "Chris Martin", description: "Learn to style your web apps quickly with Bootstrap 5 components.", rating: 4.4, thumbnail: "https://wallpaperaccess.com/full/4623107.png", URL: "https://www.youtube.com/watch?v=O_9u1P5YjVc"},
    { id: 11, title: "Angular Full Course", instructor: "Sophia Lee", description: "Learn Angular framework and build scalable web applications.", rating: 4.5, thumbnail: "https://tse1.mm.bing.net/th/id/OIP.H-4nyjwHcGPuQVkLxDuBawHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", URL: "https://www.youtube.com/watch?v=0eWrpsCLMJQ"},
    { id: 12, title: "MongoDB Crash Course", instructor: "David Kim", description: "Learn how to store and query data using MongoDB NoSQL database.", rating: 4.6, thumbnail: "https://tse3.mm.bing.net/th/id/OIP.ml2CaYENKRj4ThrLKDYoIAHaEY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", URL: "https://www.youtube.com/watch?v=c2M-rlkkT5o"}
  ];

  const getVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v");
    } catch {
      return url; 
    }
  }

  return (
    <>
      <Navbar expand="lg" sticky="top" className="py-2" style={{backgroundColor:"#ffffff96", backdropFilter:"blured"}}>
        <Container fluid className="px-3">
          <Navbar.Brand href="/CourseList" className="fw-bold" style={{cursor:"pointer", fontSize: '1.5rem'}}>
            <i className="bi bi-arrow-left-circle"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className='align-items-center'>
              <Nav.Link href="/home"><i class="bi bi-x-lg"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <h2 className="mb-4 fw-bold text-center">Free Courses</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {freeCourses.map(course => (
            <Col key={course.id}>
              <Card className="h-100 shadow-sm" style={{ borderRadius: "15px", overflow: "hidden", backgroundColor:"#ffffff4f" }}>
                <Card.Img variant="top" src={course.thumbnail} style={{ objectFit: "cover", height: "180px" }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{course.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Instructor: {course.instructor}</Card.Subtitle>
                  <Card.Text className="flex-grow-1">{course.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <Badge bg="success">{course.rating} ⭐</Badge>
                    <Button 
                      variant="primary" 
                      onClick={() => window.open(`/video/${getVideoId(course.URL)}`, "_blank")}
                    >
                      Watch
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default FreeCourses;
