import React, { useState } from "react";
import { Card, Table, ProgressBar } from "react-bootstrap";

function StudentManagement() {
  const [students] = useState([
    { name: "Alice", enrolledOn: "2025-08-01", progress: 70 },
    { name: "Bob", enrolledOn: "2025-08-10", progress: 40 },
  ]);

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>👩‍🎓 Student Management</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Enrolled On</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx}>
                <td>{student.name}</td>
                <td>{student.enrolledOn}</td>
                <td>
                  <ProgressBar
                    now={student.progress}
                    label={`${student.progress}%`}
                    striped
                    variant={student.progress > 50 ? "success" : "warning"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default StudentManagement;
