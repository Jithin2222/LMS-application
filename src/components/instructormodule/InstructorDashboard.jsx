import React, { useState } from "react";
import { Container, Row, Col,  Tab,  Nav,  Navbar,  NavDropdown, Button,  Badge,} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CourseCreation from "./CourseCreation";
import StudentManagement from "./StudentManagement";
import Analytics from "./Analytics";

function InstructorDashboard({ courses, setCourses }) {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    navigate("/login");
  };

  if (!currentUser || currentUser.role !== "instructor") {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <h3>⚠️ Unauthorized Access</h3>
      </Container>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container fluid>
          <Navbar.Brand>🎓 Learning Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text id="instructor-profile-dropdown" align="end">{`${currentUser.email}`}</Navbar.Text> 
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="p-4 flex-grow-1">
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Row>
            <Col sm={3}>
              <Nav  variant="pills"  className="flex-column bg-white p-3 rounded shadow-sm">
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
                {/* <Nav.Item>
                  <Link to="/instructorcourses" className="nav-link">
                    🎬 Course View
                  </Link>
                </Nav.Item> */}
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <div
                    className="p-4 rounded shadow-sm"
                    style={{
                      background: "rgba(255, 255, 255, 0.35)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h3 className="mb-3">👤 Instructor Profile</h3>
                    <Row>
                      <Col md={6}>
                        <p>
                          <i className="bi bi-envelope-fill" style={{marginRight:"10px"}}></i>  
                          {currentUser.email}
                        </p>
                        <p>
                          <strong>Role:</strong>{" "}
                          <Badge bg="info">{currentUser.role}</Badge>
                        </p>
                        <p>
                          <strong>Joined:</strong>{" "}
                          {new Date(currentUser.time).toLocaleString()}
                        </p>
                        <Button variant="outline-danger" onClick={handleLogout} className="mt-3">
                          Logout
                        </Button>
                      </Col>
                    </Row>
                  </div>
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
      
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <Container>
          <p className="mb-0">
            © {new Date().getFullYear()} Learning Management System | Instructor:{" "}
            {currentUser.email}
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default InstructorDashboard;
