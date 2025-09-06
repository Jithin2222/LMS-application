import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function QuizPage() {

  const QuizDetails = [
    {
      id: "01",
      name: "Python",
      description: "Test your Python knowledge with this beginner-friendly quiz.",
      URL: "https://docs.google.com/forms/d/e/1FAIpQLSe0FqVDDMjbLs3tmKsWHYJ9KtU-4TLJmqqLfKsjs9Mo_E5V5Q/viewform?embedded=true",
      image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=862&auto=format&fit=crop"
    },
    {
      id: "02",
      name: "HTML",
      description: "Check your basics in HTML with this interactive quiz.",
      URL: "https://docs.google.com/forms/d/e/1FAIpQLSfdlgR9hBJJqgje7uBS5CSqRNCY0tBbJX_AT8d1EyIC4Vt9Gg/viewform?embedded=true",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: "03",
      name: "React.js",
      description: "Think you know React? Take this quiz and find out!",
      URL: "https://docs.google.com/forms/d/e/1FAIpQLSezVTTH2xdednTSmSYgKz8GW4F9DsTtm04V7reQwDdtJkEuQA/viewform?embedded=true",
      image: "data:image/webp;base64,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"
    },
    {
      id: "04",
      name: "CSS",
      description: "Assess your styling skills with this fun CSS quiz.",
      URL: "https://example.com/css-quiz",
      image: "https://wallpaperaccess.com/full/2987647.jpg"
    },
    {
      id:"05",
      name: "Java Script",
      description: "How about some javascript questions... ",
      URL:"",
      image:"https://tse2.mm.bing.net/th/id/OIP.R7l5-wwAlniShl68x2fI8wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id:"06",
      name:"Java",
      description:"Lets see about java",
      URL:"",
      image:"https://th.bing.com/th/id/OIP.7nL7CHpFr9Da_yh04O1v8AHaEK?w=323&h=182&c=7&r=0&o=7&pid=1.7&rm=3"
    }
  ];

  return (
    <>
    <Container className="py-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">📚 Take a Quiz!</h1>
        <p className="text-muted">
          Challenge yourself with these quizzes and test your skills.
        </p>
      </div>

      {/* Quiz Cards */}
      <Row className="g-4">
        {QuizDetails.map((data) => (
          <Col md={6} lg={4} key={data.id}>
            <Card className="h-100 shadow-sm border-0 rounded-3" style={{backgroundColor:"#F0F8FF"}}>
              <Card.Img
                variant="top"
                src={data.image}
                alt={data.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">{data.name}</Card.Title>
                <Card.Text className="text-muted">{data.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <div className="d-grid">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.open(data.URL, "_blank")}
                  >
                    Take the Test
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
        <div style={{display:"flex", justifyContent:"center",marginTop:"100px"}}>
          <h2>More Comming Soon...</h2>
        </div>
      </Row>
    </Container>

    </>
  );
}
