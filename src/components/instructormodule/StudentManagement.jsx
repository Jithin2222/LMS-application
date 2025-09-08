import React, { useEffect, useState } from "react";
import { Card, Table, ProgressBar } from "react-bootstrap";

function StudentManagement() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const onlyStudents = users.filter((u) => u.role === "Student");
    const withProgress = onlyStudents.map((s) => ({ ...s, progress: s.progress || Math.floor(Math.random() * 40), enrolledOn: s.enrolledOn || new Date().toISOString().split("T")[0],}));
    setStudents(withProgress);
  }, []);

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>Student Management</Card.Title>
        <Table striped bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Enrolled On</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx}>
                <td>{student.fname} {student.lname}</td>
                <td>{student.useremail}</td>
                <td>{student.enrolledOn}</td>
                <td>
                  <ProgressBar now={student.progress} label={`${student.progress}%`} striped variant={student.progress > 50 ? "success" : "warning"}/>
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
