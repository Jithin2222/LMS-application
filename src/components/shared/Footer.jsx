import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer style={{ backgroundColor: "#1a1a1a", color: "#f0f0f0", padding: "40px 0" }}>
            <Container fluid className="ps-3 pe-0">
                <Row className="justify-content-center g-4">
                <Col xs={12} md={3}>
                    <h5 className="fw-bold ml-2">EDU-Learning</h5>
                    <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
                    Learn from the best courses online with our expert instructors.
                    </p>
                </Col>
                <Col xs={12} md={3}>
                    <h6 className="fw-bold">COMPANY</h6>
                    <ul className="list-unstyled">
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "underline" }}>Home</a></li>
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "Underline" }}>Courses</a></li>
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "Underline" }}>About</a></li>
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "Underline" }}>Contact</a></li>
                    </ul>
                </Col>

                <Col xs={12} md={3}>
                    <h6 className="fw-bold">RESOURCE</h6>
                    <ul className="list-unstyled">
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "none" }}>Blog</a></li>
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "none" }}>Help Center</a></li>
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "none" }}>Privacy Policy</a></li>
                    <li><a href="#" style={{ color: "#f0f0f0", textDecoration: "none" }}>Terms of Service</a></li>
                    </ul>
                </Col>

                <Col xs={12} md={3}>
                    <h6 className="fw-bold">FOLLOW US</h6>
                    <div style={{ fontSize: "1.3rem" }} className="d-flex gap-3">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#ccc" }}>
                        <FaLinkedin />
                    </a>
                    </div>
                </Col>
                </Row>

                <hr style={{ borderColor: "#444", margin: "20px 0" }} />

                <Row>
                <Col className="text-center" style={{ fontSize: "0.8rem", color: "#aaa" }}>
                    &copy; {new Date().getFullYear()} EDU-Learning. All rights reserved.
                </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}

export default Footer