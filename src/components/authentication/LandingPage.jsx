import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { FaChalkboardTeacher, FaLaptopCode, FaCertificate } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section
        style={{
          background: "linear-gradient(120deg, #2c3e50 0%, #4ca1af 100%)",
          color: "#fff",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold display-4">Welcome to EDU-Learning</h1>
              <p className="lead mt-3">
                Learn from the best online courses, taught by expert instructors.  
                Build skills, earn certificates, and advance your career.
              </p>
              <div className="mt-4">
                <Button
                  variant="light"
                  size="lg"
                  className="me-3 fw-bold"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="fw-bold"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
                alt="Online Learning"
                style={{ width: "100%", borderRadius: "1rem", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
        <Container>
          <h2 className="text-center fw-bold mb-5">Why Choose EDU-Learning?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm border-0 text-center p-4 h-100">
                {/* <FaChalkboardTeacher size={50} className="text-primary mb-3" /> */}
                <h5 className="fw-bold">Expert Instructors</h5>
                <p>Learn from industry experts and skilled instructors with real-world experience.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0 text-center p-4 h-100">
                {/* <FaLaptopCode size={50} className="text-success mb-3" /> */}
                <h5 className="fw-bold">Hands-On Learning</h5>
                <p>Practical projects and exercises to master new skills effectively and efficiently.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0 text-center p-4 h-100">
                {/* <FaCertificate size={50} className="text-warning mb-3" /> */}
                <h5 className="fw-bold">Certification</h5>
                <p>Earn certificates upon course completion to showcase your achievements and boost your career.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <footer style={{ backgroundColor: "#1a1a1a", color: "#f0f0f0", padding: "40px 0" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <p>&copy; {new Date().getFullYear()} EDU-Learning. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
