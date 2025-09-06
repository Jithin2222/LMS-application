import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <>
        <h3 className='text-center mb-3' style={{color: "#26415e", fontSize:'2.5rem'}}>Testimonials</h3>
        <p className='text-center'>Hear from our learners as they share their jouneys of tranformation, success, and how our platform has made a difference in their lives.</p>
        <Row className='justify-content-center g-4'>
            <Col xs={12} md={6} lg={4}>
                <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '40vh' }}>
                    <Card className='p-3 my-3 shadow-sm' style={{maxWidth:"600px", background:"linear-gradient(135deg, #dff6f0, #ffe0d8)"}}>
                    <Card.Body>
                        <Row className='align-items-center'>
                        <Col xs="auto">
                            <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="" className='rounded-circle' style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                        </Col>
                        <Col>
                            <Card.Title className='mb-1'>Donald jackman</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>Professional</Card.Subtitle>
                        </Col>
                        </Row>
                        <div className="text-warning" style={{ fontSize: "1rem" }}>
                        ★★★★☆
                        </div>
                        <Card.Text>
                            This platform completely transformed the way I learn. The courses are easy to follow, the instructors are amazing.
                        </Card.Text> 
                        <Card.Link href='#'>Read More</Card.Link>
                    </Card.Body>
                    </Card>
                </Container>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '40vh' }}>
                    <Card className='p-3 my-3 shadow-sm' style={{maxWidth:"600px", background: "linear-gradient(135deg, #dff6f0, #ffe0d8)"}}>
                    <Card.Body>
                        <Row className='align-items-center'>
                        <Col xs="auto">
                            <img src="data:image/webp;base64,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" alt="" className='rounded-circle' style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                        </Col>
                        <Col>
                            <Card.Title className='mb-1'>Donald jackman</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>Software Engineer</Card.Subtitle>
                        </Col>
                        </Row>
                        <div className="text-warning" style={{ fontSize: "1rem" }}>
                        ★★★★☆ {/* Unicode stars: ★ full, ☆ empty */}
                        </div>
                        <Card.Text>
                            The best learning experience I’ve ever had online. Everything is clear and beautifully organized. Highly recommended!
                        </Card.Text> 
                        <Card.Link href='#'>Read More</Card.Link>
                    </Card.Body>
                    </Card>
                </Container>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '40vh' }}>
                    <Card className='p-3 my-3 shadow-sm' style={{maxWidth:"600px", background: "linear-gradient(135deg, #dff6f0, #ffe0d8)"}}>
                    <Card.Body>
                        <Row className='align-items-center'>
                        <Col xs="auto">
                            <img src="https://th.bing.com/th/id/OIP.DnQq__W5pibltm9H65jDLQHaE8?w=285&h=190&c=7&r=0&o=7&pid=1.7&rm=3" alt="" className='rounded-circle' style={{ width: "60px", height: "60px", objectFit: "cover" }} />
                        </Col>
                        <Col>
                            <Card.Title className='mb-1'>Donald jackman</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>Asst. Prof</Card.Subtitle>
                        </Col>
                        </Row>
                        <div className="text-warning" style={{ fontSize: "1rem" }}>
                        ★★★★☆ {/* Unicode stars: ★ full, ☆ empty */}
                        </div>
                        <Card.Text>
                            I was able to upskill quickly and even land a new job after completing just one course. Totally worth it!
                        </Card.Text> 
                        <Card.Link href='#'>Read More</Card.Link>
                    </Card.Body>
                    </Card>
                </Container>
            </Col>
        </Row>
      </>
  )
}

export default Testimonials