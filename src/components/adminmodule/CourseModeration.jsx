import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup, Ratio } from "react-bootstrap";

function CourseModeration() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const pending = JSON.parse(localStorage.getItem("pendingCourses")) || [];
    setCourses(pending);
  }, []);

  const updateCourseStatus = (id, status) => {
    const updated = courses.map((c) =>
      c.id === id ? { ...c, status } : c
    );
    setCourses(updated);
    localStorage.setItem("pendingCourses", JSON.stringify(updated));

    if (status === "approved") {
      const approvedCourses = JSON.parse(localStorage.getItem("approvedCourses")) || [];
      const courseToAdd = updated.find(c => c.id === id);
      localStorage.setItem("approvedCourses", JSON.stringify([...approvedCourses, courseToAdd]));
    }
  };

  const removeCourse = (id) => {
    const updatedPending = courses.filter(c => c.id !== id);
    setCourses(updatedPending);
    localStorage.setItem("pendingCourses", JSON.stringify(updatedPending));

    const approvedCourses = JSON.parse(localStorage.getItem("approvedCourses")) || [];
    const updatedApproved = approvedCourses.filter(c => c.id !== id);
    localStorage.setItem("approvedCourses", JSON.stringify(updatedApproved));

    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const updatedEnrolled = enrolledCourses.filter(c => c.id !== id);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedEnrolled));

    alert("Course removed successfully!");
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">📚 Course Moderation</h2>
      <div className="alert alert-info mt-4" role="alert">
        Review and approve course submissions before they go live.
      </div>

      {courses.length === 0 && <p>No courses submitted.</p>}

      <ListGroup>
        {courses.map((course) => (
          <ListGroup.Item key={course.id} className="mb-3">
            <h5>{course.title}</h5>
            <p><strong>Instructor:</strong> {course.author}</p>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Status:</strong> {course.status}</p>

            {course.videos.map((vid, idx) => (
              <div key={idx} className="mt-2">
                <h6>{vid.title}</h6>
                <Ratio aspectRatio="16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allowFullScreen
                  />
                </Ratio>
              </div>
            ))}

            <div className="mt-2">
              {course.status === "pending" && (
                <>
                  <Button
                    variant="success"
                    size="sm"
                    className="me-2"
                    onClick={() => updateCourseStatus(course.id, "approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="me-2"
                    onClick={() => updateCourseStatus(course.id, "rejected")}
                  >
                    Reject
                  </Button>
                </>
              )}
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeCourse(course.id)}
              >
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CourseModeration;
