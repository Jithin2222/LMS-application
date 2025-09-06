import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((c) => c.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4 text-center">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-muted">No courses in your wishlist yet.</p>
      ) : (
        <Row className="g-4">
          {wishlist.map((course) => (
            <Col md={4} key={course.id}>
              <Card className="shadow-sm border-0 rounded-4 h-100">
                <Card.Img 
                  src={course.Image} 
                  alt={course.name} 
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text className="text-muted">{course.instructor}</Card.Text>
                  <h6 className="fw-bold text-success">{course.price}</h6>
                  <Button 
                    variant="primary" 
                    className="me-2" 
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    View
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    onClick={() => removeFromWishlist(course.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default WishlistPage;
