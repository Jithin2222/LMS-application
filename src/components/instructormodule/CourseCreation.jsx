import React, { useState } from "react";
import { Card, Button, Form, ListGroup, Ratio } from "react-bootstrap";

function CourseCreation({ courses = [], setCourses = () => {} }) {
  const [courseTitle, setCourseTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Extract YouTube Video ID
  const getYouTubeId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Add a new course
  const addCourse = () => {
    if (!courseTitle.trim()) {
      alert("Enter a course title");
      return;
    }
    setCourses([...courses, { title: courseTitle.trim(), videos: [] }]);
    setCourseTitle("");
  };

  // Add video to a specific course (restrict to 1 video per course)
  const addVideo = (index) => {
    const videoId = getYouTubeId(videoUrl);
    if (!videoId) {
      alert("Enter a valid YouTube URL");
      return;
    }

    const updatedCourses = [...courses];

    if (!updatedCourses[index].videos) {
      updatedCourses[index].videos = [];
    }

    if (updatedCourses[index].videos.length > 0) {
      alert("This course already has a video assigned!");
      return;
    }

    updatedCourses[index].videos.push({
      id: videoId,
      title: `${updatedCourses[index].title} - Intro Video`,
    });

    setCourses(updatedCourses);
    setVideoUrl("");
  };

  // Delete a video
  const deleteVideo = (courseIndex, videoIndex) => {
    const updatedCourses = [...courses];
    if (updatedCourses[courseIndex]?.videos) {
      updatedCourses[courseIndex].videos.splice(videoIndex, 1);
    }
    setCourses(updatedCourses);
  };

  // Delete a course
  const deleteCourse = (courseIndex) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(courseIndex, 1);
    setCourses(updatedCourses);
  };

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>📚 Course Creation</Card.Title>

        {/* Add New Course */}
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Enter Course Title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          />
          <Button variant="primary" onClick={addCourse} className="ms-2">
            ➕ Add Course
          </Button>
        </Form.Group>

        {/* Display Courses */}
        {(!courses || courses.length === 0) && <p>No courses added yet.</p>}

        {courses && courses.length > 0 && (
          <ListGroup>
            {courses.map((course, index) => (
              <ListGroup.Item key={index} className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-primary">{course.title}</h5>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteCourse(index)}
                  >
                    🗑 Delete Course
                  </Button>
                </div>

                {/* Add Video to Course */}
                <Form.Group className="d-flex mb-2 mt-2">
                  <Form.Control
                    type="text"
                    placeholder="Paste YouTube URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                  />
                  <Button
                    variant="success"
                    onClick={() => addVideo(index)}
                    className="ms-2"
                  >
                    Add Video
                  </Button>
                </Form.Group>

                {/* Show Video */}
                {course.videos && course.videos.length > 0 ? (
                  course.videos.map((vid, vIndex) => (
                    <Card key={vIndex} className="mb-2 shadow-sm">
                      <Card.Body>
                        <Card.Title>{vid.title}</Card.Title>
                        <Ratio aspectRatio="16x9">
                          <iframe
                            src={`https://www.youtube.com/embed/${vid.id}`}
                            title={vid.title}
                            allowFullScreen
                          ></iframe>
                        </Ratio>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="mt-2"
                          onClick={() => deleteVideo(index, vIndex)}
                        >
                          ❌ Delete Video
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p className="text-muted">No video added yet.</p>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}

export default CourseCreation;
