import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col, InputGroup, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUsers = [...existingUsers, user];
    localStorage.setItem("users", JSON.stringify(newUsers));
    
    localStorage.setItem("userData", JSON.stringify(user));
    navigate("/home");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-2 fw-bold text-primary">Register</h1>
      <Alert variant="info" className="text-center fw-semibold rounded-4" style={{backgroundColor:"#ffffff41"}}>
        Already registered?{" "}
        <Button variant="link" className="p-0 fw-bold" onClick={handleLogin}>
          Login here
        </Button>
      </Alert>

      <Form onSubmit={handleSubmit}>
        <Card className="shadow-lg rounded-5 p-4" style={{backgroundColor:"#ffffff41"}}>
          <Row className="align-items-start">
            <Col md={6} className="pe-md-4 border-end">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i class="bi bi-person-fill"></i>
                      </InputGroup.Text>
                      <Form.Control type="text" name="fname"  value={user.fname || ""} onChange={handleChange} placeholder="First name" required />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i class="bi bi-people-fill"></i>
                      </InputGroup.Text>
                      <Form.Control type="text" name="lname" value={user.lname || ""} onChange={handleChange} placeholder="Last name" required/>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i class="bi bi-envelope-fill"></i>
                  </InputGroup.Text>
                  <Form.Control type="email" name="useremail" value={user.useremail || ""} onChange={handleChange} placeholder="Enter email" required/>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i class="bi bi-person-badge"></i>
                  </InputGroup.Text>
                  <Form.Control type="text" name="username" value={user.username || ""} onChange={handleChange} placeholder="Choose username" required/>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6} className="ps-md-4">
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i class="bi bi-lock-fill"></i>
                  </InputGroup.Text>
                  <Form.Control type="password" name="userpassword" value={user.userpassword || ""} onChange={handleChange} placeholder="Enter password"  required/>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select name="role" value={user.role || ""} onChange={handleChange} required>
                  <option value="">
                    Select role...
                  </option>
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                  <option value="Guest">Guest</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me" required />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary" size="lg" type="submit" className="me-3">
              Register
            </Button>
          </div>
        </Card>
      </Form>
    </Container>
  );
}

export default Register;
