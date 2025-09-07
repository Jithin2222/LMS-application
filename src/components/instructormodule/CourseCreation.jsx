import React, { useState, useEffect } from "react";
import { Card, Button, Form, ListGroup, Ratio } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

function CourseCreation() {
  const { currentUser } = useAuth(); 
  const [courseTitle, setCourseTitle] = useState("");
  const [courseAuthor, setCourseAuthor] = useState(currentUser?.email || "");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!currentUser) return;
    const storedCourses = JSON.parse(localStorage.getItem("pendingCourses")) || [];
    const myCourses = storedCourses.filter((c) => c.instructor === currentUser.email);
    setCourses(myCourses);
  }, [currentUser]);

  const getYouTubeId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const submitCourse = () => {
    if (!courseTitle.trim()) return alert("Enter a course title");
    if (!courseDescription.trim()) return alert("Enter course description");
    if (!coursePrice.trim()) return alert("Enter course price");

    const videos = [];
    if (videoUrl.trim()) {
      const videoId = getYouTubeId(videoUrl);
      if (!videoId) return alert("Enter a valid YouTube URL");
      videos.push({ id: videoId, title: `${courseTitle.trim()} - Intro Video` });
    }

    const newCourse = {
      id: Date.now(),
      title: courseTitle.trim(),
      author: courseAuthor,
      description: courseDescription.trim(),
      price: coursePrice.trim(),
      instructor: currentUser.email,
      status: "pending",
      videos: videos,
    };

    const pendingCourses = JSON.parse(localStorage.getItem("pendingCourses")) || [];
    localStorage.setItem("pendingCourses", JSON.stringify([...pendingCourses, newCourse]));

    setCourses([...courses, newCourse]);
    setCourseTitle("");
    setCourseDescription("");
    setCoursePrice("");
    setVideoUrl("");
  };

  const clearCourses = () => {
    const remainingCourses = JSON.parse(localStorage.getItem("pendingCourses")).filter(
      (c) => c.instructor !== currentUser.email
    );
    localStorage.setItem("pendingCourses", JSON.stringify(remainingCourses));
    setCourses([]);
  };

  if (!currentUser) {
    return <p className="text-danger">⚠️ You must be logged in as an instructor to create courses.</p>;
  }

  return (
    <Card className="shadow" style={{backgroundColor:"transparent"}}>
      <Card.Body>
        <Card.Title>📚 Course Creation</Card.Title>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Course Title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your name (Instructor)"
            value={courseAuthor}
            onChange={(e) => setCourseAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Course Description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Course Price"
            value={coursePrice}
            onChange={(e) => setCoursePrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Paste YouTube URL (optional)"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={submitCourse} className="me-2">
          <i className="bi bi-plus-lg" variant="dark" ></i>
          Submit Course Request
        </Button>
        <Button variant="danger" onClick={clearCourses}>
          Clear My Requests
        </Button>
        {courses.length === 0 && <p className="mt-3">No courses submitted yet.</p>}
        {courses.length > 0 && (
          <ListGroup className="mt-3">
            {courses.map((course) => (
              <ListGroup.Item key={course.id}>
                <h5>{course.title}</h5>
                <p><strong>Instructor:</strong> {course.author}</p>
                <p><strong>Description:</strong> {course.description}</p>
                <p><strong>Price:</strong> ${course.price}</p>
                <span>Status: {course.status}</span>
                {course.videos.map((vid, idx) => (
                  <div key={idx} className="mt-2">
                    <h6>{vid.title}</h6>
                    <Ratio aspectRatio="16x9">
                      <iframe
                        src={`https://www.youtube.com/embed/${vid.id}`}
                        title={vid.title}
                        allowFullScreen
                      ></iframe>
                    </Ratio>
                  </div>
                ))}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}

export default CourseCreation;
