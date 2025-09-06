import React, { useState } from "react";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Determine role
    let role = null;
    if (user.useremail.endsWith("@gmail.com")) role = "student";
    else if (user.useremail.endsWith("@instructor.com")) role = "instructor";
    else if (user.useremail.endsWith("@admin.com")) role = "admin";
    else {
      alert(" Please enter a valid email address");
      return;
    }

    const loggedInUser = {
      email: user.useremail,
      role,
      time: new Date().toISOString(),
    };
    login(loggedInUser);

    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    if (!allUsers.find((u) => u.email === loggedInUser.email)) {
      allUsers.push(loggedInUser);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }

    // Navigate based on role
    if (role === "student") navigate("/home");
    else if (role === "instructor") navigate("/instructorDashboard");
    else if (role === "admin") navigate("/admindashboard");
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="shadow-lg rounded-4 border-0" style={{ backgroundColor: "#ffffff63" }}>
            <Card.Header
              className="text-center py-4"
              style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: "1.5rem",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            >
              LOGIN
            </Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="useremail"
                    value={user.useremail || ""}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={{ borderRadius: "0.5rem", padding: "0.75rem" }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="userpassword"
                    value={user.userpassword || ""}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    style={{ borderRadius: "0.5rem", padding: "0.75rem" }}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" label="Remember me" />
                  <a href="#" className="small text-primary text-decoration-none">
                    Forgot Password?
                  </a>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100 mb-3"
                  style={{ borderRadius: "0.5rem", fontWeight: "500" }}
                >
                  Login
                </Button>

                <div className="text-center mb-3">
                  <span className="text-muted">Or login with</span>
                </div>

                <Row className="justify-content-center g-3 mb-4">
                  <Col xs="auto">
                    <Button variant="outline-danger" className="rounded-circle p-2" style={{ width: "45px", height: "45px" }}></Button>
                  </Col>
                  <Col xs="auto">
                    <Button variant="outline-primary" className="rounded-circle p-2" style={{ width: "45px", height: "45px" }}></Button>
                  </Col>
                  <Col xs="auto">
                    <Button variant="outline-info" className="rounded-circle p-2" style={{ width: "45px", height: "45px" }}></Button>
                  </Col>
                  <Col xs="auto">
                    <Button variant="outline-dark" className="rounded-circle p-2" style={{ width: "45px", height: "45px" }}></Button>
                  </Col>
                </Row>

                <div className="text-center">
                  <span className="me-2">Don’t have an account?</span>
                  <Button variant="outline-primary" size="sm" onClick={() => navigate("/register")}>
                    Register
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
