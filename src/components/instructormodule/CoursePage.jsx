import React from "react";
import { Card, Ratio } from "react-bootstrap";

function CoursePage({ courses }) {
  return (
    <div className="p-4">
      <h2>📺 Available Courses</h2>

      {(!courses || courses.length === 0) && (
        <p>No courses available. Please add from dashboard.</p>
      )}

      {/* Flex container for all course cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",   // keep in one row
          overflowX: "auto",    // scroll if too many courses
          gap: "20px",
          paddingBottom: "10px",
        }}
      >
        {courses.map((course, index) => ( 
          <Card
            key={index}
            className="shadow"
            style={{ minWidth: "400px", flex: "0 0 auto" }}
          >
            <Card.Body>
              <h4 className="text-primary">{course.title}</h4>

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
        ))}
      </div>
    </div>
  );
}

export default CoursePage;
