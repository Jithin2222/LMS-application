import React, { useState } from 'react';

 function CourseModeration() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Intro to React', description: 'Basics of React', status: 'pending' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS', status: 'pending' },
  ]);

  const handleApprove = (id) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, status: 'approved' } : course
    ));
  };

  const handleReject = (id) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, status: 'rejected' } : course
    ));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">📚 Course Moderation</h2>

      <div className="alert alert-info mt-4" role="alert">
        Review and approve course submissions before they go live.
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Moderation Tasks
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✅ Review course titles & descriptions</li>
              <li className="list-group-item">📝 Check content quality and structure</li>
              <li className="list-group-item">🚫 Reject incomplete or duplicate submissions</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header bg-secondary text-white">
              Pending Courses
            </div>
            <ul className="list-group list-group-flush">
              {courses.map(course => (
                <li key={course.id} className="list-group-item d-flex justify-content-between align-items-start">
                  <div>
                    <h6>{course.title}</h6>
                    <small>{course.description}</small><br/>
                    <span className={`badge bg-${course.status === 'approved' ? 'success' : course.status === 'rejected' ? 'danger' : 'warning'} text-uppercase`}>
                      {course.status}
                    </span>
                  </div>
                  {course.status === 'pending' && (
                    <div className="btn-group">
                      <button className="btn btn-sm btn-success" onClick={() => handleApprove(course.id)}>Approve</button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleReject(course.id)}>Reject</button>
                    </div>
                  )}
                </li>
              ))}
              {courses.length === 0 && <li className="list-group-item">No courses available.</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseModeration;