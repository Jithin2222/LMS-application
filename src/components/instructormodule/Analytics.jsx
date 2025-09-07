import React, { useEffect, useState } from "react";
import { Card, Row, Col, ProgressBar, Table } from "react-bootstrap";
import Papa from "papaparse";


const coursesConfig = [
  {
    name: "React Basics",
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkKjHyM0gWoVKhzg7KOG_hY179CcYz2D43RH0qNA5l-mYEjXZyxl-SNLwo9mVeFNnYso4OG-c3A3-o/pub?output=csv",
  },
  {
    name: "Python",
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9mJDzV8Ytr2PngvxhAanjVjiYlsA2uPMIfPCzP9wheXwxxgyKliiIBeJv12SdCiNaWg3fBWj4MoY1/pub?output=csv",
  },
  {
    name: "HTML",
    sheetUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhh7FVvOVg8mxEPCHiMiGt4jUJ3XBFUJbADX7y1wmjv2ykBjZqvvT9HA07-8wI0OSZHgtbOjB7JQVT/pub?output=csv",
  },
];

function Analytics() {
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    coursesConfig.forEach((course) => {
      Papa.parse(course.sheetUrl, {
        download: true,
        header: true,
        complete: (result) => {
          setCourseData((prev) => ({
            ...prev,
            [course.name]: result.data,
          }));
        },
      });
    });
  }, []);

  return (
    <div>
      {coursesConfig.map((course, index) => {
        const students = courseData[course.name] || [];

        const avgScore =
          students.length > 0
            ? (
                students.reduce(
                  (sum, s) => sum + Number(s.Score || 0),
                  0
                ) / students.length
              ).toFixed(2)
            : 0;

        return (
          <Card className="shadow mb-4" key={index}>
            <Card.Body>
              <Card.Title>📚 {course.name} - Analytics</Card.Title>
              <Row>
                <Col md={6}>
                  <h6>Average Score</h6>
                  <ProgressBar
                    now={avgScore}
                    label={`${avgScore}%`}
                    className="mb-3"
                  />
                </Col>
                <Col md={6}>
                  <h6>Total Students</h6>
                  <p className="fs-4 fw-bold">{students.length}</p>
                </Col>
              </Row>

              <h6 className="mt-4">📋 Student Scores</h6>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, idx) => (
                    <tr key={idx}>
                      <td>{s.Name}</td>
                      <td>{s.Score}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Analytics;
