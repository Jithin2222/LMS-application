import React from 'react';
import { Button, Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const PurchaseCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const course = location.state?.course;

    if (!course) {
        return (
            <Container className="py-5 text-center">
                <h1>No Course Selected</h1>
                <Button variant="primary" onClick={() => navigate("/courseList")}>
                    Go Back
                </Button>
            </Container>
        );
    }

    const handlePayment = () => {
  const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  const isAlreadyEnrolled = storedCourses.some((c) => c.id === course.id);

  if (!isAlreadyEnrolled) {
    storedCourses.push(course);
    localStorage.setItem("enrolledCourses", JSON.stringify(storedCourses));
  }

  const purchases = JSON.parse(localStorage.getItem("purchases")) || [];
  purchases.push({
    id: course.id,
    name: course.name,
    price: parseFloat(course.price.replace("$", "")) || 0, 
    date: new Date().toISOString(),
  });
  localStorage.setItem("purchases", JSON.stringify(purchases));

  alert("You have successfully enrolled in the selected course!");
  navigate("/profile");
};



    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg border-0 rounded-4 p-4"  style={{backgroundColor:"#ffffff59"}}>
                        <h4 className="fw-bold mb-4 text-center">Checkout</h4>

                        <Card.Img 
                            src={course.Image} 
                            alt={course.name} 
                            className="mb-4 rounded-3" 
                            style={{ maxHeight: '300px', objectFit: 'cover' }} 
                        />

                        <h2 className="fw-bold mb-2">{course.name}</h2>
                        <p className="text-muted mb-3">
                            Instructor: {course.instructor}
                        </p>

                        <Row className="mb-3">
                            <Col>
                                <Badge bg="success" className="me-2 p-2">
                                     Certificate
                                </Badge>
                                <Badge bg="info" className="p-2">
                                    {course.duration || "3h 30m"}
                                </Badge>
                            </Col>
                        </Row>

                        <h4 className="text-success mb-3">{course.price}</h4>
                        <p className="text-secondary mb-4">{course.description}</p>

                        <Button 
                            onClick={handlePayment} 
                            variant="primary" 
                            size="lg" 
                            className="w-100 mb-2"
                        >
                            Proceed to Payment
                        </Button>
                        <Button 
                            variant="outline-secondary" 
                            className="w-100" 
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PurchaseCourse;
