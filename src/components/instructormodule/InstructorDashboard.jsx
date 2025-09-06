import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Card
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CourseCreation from "./CourseCreation";
import StudentManagement from "./StudentManagement";
import Analytics from "./Analytics";

function InstructorDashboard({ courses, setCourses }) {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  // Mock instructor data
  const instructor = {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    role: "Instructor",
    bio: "Passionate educator with expertise in web development and React."
  };

  // Logout handler
  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate('/Login')
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand>🎓 Learning Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown
                title={`👩‍🏫 ${instructor.name}`}
                id="instructor-profile-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={() => setActiveTab("profile")}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  🚪 Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container fluid className="p-4 bg-light flex-grow-1">
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Row>
            {/* Sidebar */}
            <Col sm={3}>
              <Nav
                variant="pills"
                className="flex-column bg-white p-3 rounded shadow-sm"
              >
                <Nav.Item>
                  <Nav.Link eventKey="profile">👤 Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="course">📚 Course Creation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="students">👩‍🎓 Student Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="analytics">📊 Analytics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/coursepage" className="nav-link">
                    🎬 Course View
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <Card className="shadow">
                    <Card.Body>
                      <h3>👤 Instructor Profile</h3>
                      <p>
                        <strong>Name:</strong> {instructor.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {instructor.email}
                      </p>
                      <p>
                        <strong>Role:</strong> {instructor.role}
                      </p>
                      <p>
                        <strong>Bio:</strong> {instructor.bio}
                      </p>
                      <Button variant="danger" onClick={handleLogout}>
                        🚪 Logout
                      </Button>
                    </Card.Body> 
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="students">
                  <StudentManagement />
                </Tab.Pane>
                <Tab.Pane eventKey="analytics">
                  <Analytics />
                </Tab.Pane>
                <Tab.Pane eventKey="course">
                  <CourseCreation courses={courses} setCourses={setCourses} />
                </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <Container>
          <p className="mb-0">
            © {new Date().getFullYear()} Learning Management System | Instructor:{" "}
            {instructor.name}
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default InstructorDashboard;


