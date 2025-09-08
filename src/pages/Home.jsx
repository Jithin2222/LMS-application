import React, { useEffect } from 'react'
import NavPage from '../components/shared/NavPage'
import Searchbar from '../components/shared/Searchbar'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import adobe from '../assets/images/adobe.png'
import amazonpay from '../assets/images/amazon-pay.png'
import apple from '../assets/images/apple-logo.png'
import meta from '../assets/images/meta.png'
import microsoft from '../assets/images/microsoft.png'
import nvidia from '../assets/images/nvidia.png'
import ibm from '../assets/images/ibm.png'
import Testimonials from '../components/shared/Testimonials'
import Footer from '../components/shared/Footer'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();


  return (
    <>
      <NavPage/>

      <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '40vh' }}>
        <h1 className='text-center mb-3' style={{color:"#26415e", fontSize:'3.1rem'}}>Empower Your future with the courses designed to fit your choice.</h1>
        <p className='text-center'>We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals</p>
      </Container>

      <Searchbar/>

      <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '10vh' }}>
        <p className='text-center mb-5' style={{color: "#26415e"}}>Trusted by learners from</p>
        <Row className="justify-content-center align-items-center mb-3">
          <Col xs="auto">
            <a href="" target='_blank'>
              <img src={adobe} alt="adobe" style={{ height: "40px", width: "auto" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="" target='_blank'>
              <img src={amazonpay} alt="amazon" style={{ height: "40px", width: "auto" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="" target='_blank'>
              <img src={apple} alt="amazon" style={{ height: "40px", width: "auto" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="" target='_blank'>
              <img src={meta} alt="amazon" style={{ height: "40px", width: "auto" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="" target='_blank'>
              <img src={microsoft} alt="amazon" style={{ height: "40px", width: "auto" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="" target='_blank'>
              <img src={nvidia} alt="amazon" style={{ height: "40px", width: "auto" }} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="" target='_blank'>
              <img src={ibm} alt="amazon" style={{ height: "40px", width: "auto" }} />
            </a>
          </Col>
        </Row>
      </Container>

      <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '40vh' }}>
        <h3 className='text-center mb-3' style={{color: "#26415e", fontSize:'2.5rem'}}>Learn from the best</h3>
        <p className='text-center'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
      </Container>

      <Testimonials/>

      <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '25vh' }}>
        <h3 className='text-center mb-3' style={{color: "#26415e", fontSize:'2.5rem'}}>Learn anything, anytime, anywhere</h3>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi?</p>
      </Container>

      <Container className='d-flex flex-row justify-content-center align-items-center' style={{ minHeight: '25vh' }}>
        <Button variant='light' onClick={()=>navigate('/CoursePage')}>
          Learn More
          <i className="bi bi-arrow-right"></i>
        </Button>
      </Container>

      <Footer/>   
    </>
  )
}

export default Home