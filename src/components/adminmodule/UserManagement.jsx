import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    setUsers(storedUsers);
  }, []);

  const handleRemoveUser = (email) => {
    const updatedUsers = users.filter((u) => u.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all users?")) {
      setUsers([]);
      localStorage.removeItem("allUsers");
    }
  };

  const students = users.filter((u) => u.role === "student");
  const instructors = users.filter((u) => u.role === "instructor");

  return (
    <div className="container mt-4">
      <h2>👥 User Management</h2>

      <div className="alert alert-warning mt-3" role="alert">
        Admins can manage student and instructor accounts here.
      </div>

      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger btn-sm" onClick={handleClearAll}>
          Clear All Users
        </button>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card border-success h-100">
            <div className="card-header bg-success text-white">🧑‍🎓 Students</div>
            <div className="card-body">
              <p>View and manage registered students.</p>
              <ul className="list-group">
                {students.length > 0 ? (
                  students.map((student, idx) => (
                    <li
                      key={idx}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{student.email}</strong> <br />
                        Role: {student.role}
                      </div>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleRemoveUser(student.email)}
                      >
                        Remove
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-muted">
                    No students found
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card border-primary h-100">
            <div className="card-header bg-primary text-white">
              👨‍🏫 Instructors
            </div>
            <div className="card-body">
              <p>Approve or reject instructor applications.</p>
              <ul className="list-group">
                {instructors.length > 0 ? (
                  instructors.map((instructor, idx) => (
                    <li
                      key={idx}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{instructor.email}</strong> <br />
                        Role: {instructor.role}
                      </div>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleRemoveUser(instructor.email)}
                      >
                        Remove
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-muted">
                    No instructors found
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
