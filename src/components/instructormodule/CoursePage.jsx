import React from "react";
import { Card, Ratio, Badge } from "react-bootstrap";

function CoursePage({ courses }) {
  if (!courses || courses.length === 0) {
    return (
      <div className="p-4">
        <h2>Available Courses</h2>
        <p>No courses available. Please add from dashboard.</p>
      </div>
    );
  }

  const approvedCourses = courses.filter((c) => c.status === "approved");
  const rejectedCourses = courses.filter((c) => c.status === "rejected");

  const renderCourses = (list) =>
    list.map((course, index) => (
      <Card
        key={index}
        className="shadow"
        style={{ minWidth: "400px", flex: "0 0 auto" }}
      >
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="text-primary mb-0">{course.title}</h4>
            <Badge
              bg={
                course.status === "approved"  ? "success"
                  : course.status === "rejected"  ? "danger"
                    : "secondary"
              }>
              {course.status}
            </Badge>
          </div>
          <p className="text-muted">{course.description}</p>
          {course.videos && course.videos.length > 0 ? (
            course.videos.map((vid, vIndex) => (
              <div key={vIndex} style={{ marginBottom: "10px" }}>
                <Ratio aspectRatio="16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allowFullScreen
                    style={{ borderRadius: "8px" }}
                  ></iframe>
                </Ratio>
              </div>
            ))
          ) : (
            <p className="text-muted">No video added yet.</p>
          )}
        </Card.Body>
      </Card>
    ));

  return (
    <div className="p-4">
      <h2>📺 Courses</h2>

      <h4 className="mt-4 text-success">✅ Approved Courses</h4>
      {approvedCourses.length === 0 ? (
        <p className="text-muted">No approved courses yet.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "20px",
            paddingBottom: "10px",
          }}
        >
          {renderCourses(approvedCourses)}
        </div>
      )}

      <h4 className="mt-4 text-danger">❌ Rejected Courses</h4>
      {rejectedCourses.length === 0 ? (
        <p className="text-muted">No rejected courses.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "20px",
            paddingBottom: "10px",
          }}
        >
          {renderCourses(rejectedCourses)}
        </div>
      )}
    </div>
  );
}

export default CoursePage;
