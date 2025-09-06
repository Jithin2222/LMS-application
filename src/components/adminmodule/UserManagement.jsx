import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

 function UserManagement() {
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Simulated API call
    const fetchStudents = () => [
      { name: 'Stani', enrolledCourses: 3, active: true },
      { name: 'Dafflin', enrolledCourses: 5, active: false }
    ];

    const fetchInstructors = () => [
      { name: 'Dr. Nisha', submittedCourses: 2 },
      { name: 'Prof. Nimisha', submittedCourses: 4 }
    ];

    setStudents(fetchStudents());
    setInstructors(fetchInstructors());
  }, []);


  return (
    <div className="container mt-4">
      <h2>👥 User Management</h2>

      <div className="alert alert-warning mt-3" role="alert">
        Admins can manage student and instructor accounts here.
      </div>

  
      <div className="row mt-4">
        {/* Students Section */}
        <div className="col-md-6 mb-4">
          <div className="card border-success h-100">
            <div className="card-header bg-success text-white">
              🧑‍🎓 Students
            </div>
            <div className="card-body">
              <p>View and manage registered students.</p>
              <ul className="list-group">
                {students.map((student, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{student.name}</strong> <br />
                      Courses: {student.enrolledCourses}
                    </div>
                    <span className={`badge ${student.active ? 'bg-success' : 'bg-secondary'}`}>
                      {student.active ? 'Active' : 'Inactive'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



        {/* Instructors Section */}
        
        <div className="col-md-6 mb-4">
          <div className="card border-primary h-100">
            <div className="card-header bg-primary text-white">
              👨‍🏫 Instructors
            </div>
            <div className="card-body">
              <p>Approve or reject instructor applications.</p>
              <ul className="list-group">
                {instructors.map((instructor, idx) => (
                  <li key={idx} className="list-group-item">
                    <strong>{instructor.name}</strong> — Submitted Courses: {instructor.submittedCourses}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;