import React, { useEffect, useState, useMemo } from "react";
import { Card, Col, Container, Image, ProgressBar, Row, Button, Accordion, ListGroup, Badge,} from "react-bootstrap";

function UserDashboard() {

  const [userData, setUserData]=useState(null);
  const[isEditing, setIsEditing]=useState(false);
  
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedByCourse, setCompletedByCourse] = useState({});
  const STORAGE_KEY = "enrolledCourses";
  const COMPLETED_KEY = (id) => `course_${id}_tasks_completed`;

  useEffect(()=>{
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    setUserData(savedUser);
  },[])

  const handleEdit = () => {
    setIsEditing(!isEditing);
  }

  const buildDummyTasks = (course) => ({
    assignments: [
      `${course.name}: Assignment 1 - Getting Started`,
      `${course.name}: Assignment 2 - Core Concepts`,
      `${course.name}: Assignment 3 - Practical Exercise`,
    ],
    quizzes: [
      `${course.name}: Quiz 1 - Fundamentals`,
      `${course.name}: Quiz 2 - Intermediate`,
      `${course.name}: Quiz 3 - Final`,
    ],
    projects: [
      `${course.name}: Capstone Proposal`,
      `${course.name}: Final Project`,
    ],
  });

  const tasksByCourse = useMemo(() => {
    const map = {};
    enrolledCourses.forEach((c) => (map[c.id] = buildDummyTasks(c)));
    return map;
  }, [enrolledCourses]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const withProgress = saved.map((c) => ({ ...c, progress: c.progress || 0 }));
    setEnrolledCourses(withProgress);
    const completed = {};
    withProgress.forEach((c) => {
      const fromLS = JSON.parse(localStorage.getItem(COMPLETED_KEY(c.id))) || {
        assignments: [],
        quizzes: [],
        projects: [],
      };
      completed[c.id] = fromLS;
    });
    setCompletedByCourse(completed);
  }, []);

  const clearEnrolledCourses = () => {
    localStorage.removeItem(STORAGE_KEY);
    Object.keys(completedByCourse).forEach((id) =>
      localStorage.removeItem(COMPLETED_KEY(id))
    );
    setEnrolledCourses([]);
    setCompletedByCourse({});
  };

  const updateProgress = (id, newProgress) => {
    const updated = enrolledCourses.map((course) =>
      course.id === id ? { ...course, progress: newProgress } : course
    );
    setEnrolledCourses(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const toggleTask = (courseId, type, label) => {
    setCompletedByCourse((prev) => {
      const current = prev[courseId] || { assignments: [], quizzes: [], projects: [] };
      const list = new Set(current[type] || []);
      if (list.has(label)) list.delete(label);
      else list.add(label);
      const updated = {
        ...prev,
        [courseId]: { ...current, [type]: Array.from(list) },
      };
      localStorage.setItem(COMPLETED_KEY(courseId), JSON.stringify(updated[courseId]));
      return updated;
    });
  };

  const markAll = (courseId) => {
    const t = tasksByCourse[courseId];
    const all = {
      assignments: t.assignments.slice(),
      quizzes: t.quizzes.slice(),
      projects: t.projects.slice(),
    };
    setCompletedByCourse((prev) => {
      const updated = { ...prev, [courseId]: all };
      localStorage.setItem(COMPLETED_KEY(courseId), JSON.stringify(all));
      return updated;
    });
  };

  const resetAll = (courseId) => {
    const empty = { assignments: [], quizzes: [], projects: [] };
    setCompletedByCourse((prev) => {
      const updated = { ...prev, [courseId]: empty };
      localStorage.setItem(COMPLETED_KEY(courseId), JSON.stringify(empty));
      return updated;
    });
  };

  const overallProgress =
    enrolledCourses.length > 0
      ? Math.round(
          enrolledCourses.reduce((acc, c) => acc + (c.progress || 0), 0) /
            enrolledCourses.length
        )
      : 0;

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fw-bold">My Profile</h2>
            <Button variant="warning" size="sm" onClick={handleEdit}>
              <i className="bi bi-feather"></i>
            </Button>
          </div>

          <Card className="mb-4 shadow-sm" style={{ borderRadius: "20px", }}>
            <Card.Body className="d-flex align-items-center">
              <div className="me-4 text-center">
                <Image
                  src={
                    userData?.profileImage ||
                    "https://tse4.mm.bing.net/th/id/OIP.p_yVJpMf6hUETy-glD0MQQHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                  }
                  roundedCircle
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
                {isEditing && (
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control mt-2"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setUserData({ ...userData, profileImage: reader.result });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                )}
              </div>
              <div className="flex-grow-1">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={userData?.fname || ""}
                      onChange={(event) => setUserData({ ...userData, fname: event.target.value })}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      value={userData?.lname || ""}
                      onChange={(event) => setUserData({ ...userData, lname: event.target.value })}
                    />
                    <Button
                      className="mt-2"
                      size="sm"
                      variant="success"
                      onClick={() => {
                        localStorage.setItem("userData", JSON.stringify(userData));
                        setIsEditing(false);
                      }}
                    >
                      <i className="bi bi-floppy-fill"></i>
                    </Button>
                  </>
                ) : (
                  <>
                    <h4 className="mb-1">
                      {userData ? `${userData.fname} ${userData.lname}` : "User"}
                    </h4>
                    <p className="text-muted mb-0">{userData ? userData.role : "not set"}</p>
                  </>
                )}
              </div>
            </Card.Body>
          </Card>

          <h5 className="fw-bold mb-3">Account</h5>
          <Card className="mb-3 shadow-sm" style={{ borderRadius: "20px", backgroundColor: "#FFFAFA" }}>
            <Card.Body>
              <h6>User Name</h6>
              <p className="text-muted mb-0">
                {userData ? userData.username : "username"}
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm" style={{ borderRadius: "20px", backgroundColor: "#FFFAFA" }}>
            <Card.Body>
              <h6>Email</h6>
              <p className="text-muted mb-0">
                {userData ? userData.useremail : "not Set"}
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-3 shadow-sm" style={{ borderRadius: "20px", backgroundColor: "#F0FFF0" }}>
            <Card.Body>
              <h6>Password</h6>
              <p className="text-muted mb-0">
                {userData ? "*******": "not set"}
              </p>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="fw-bold mt-4 mb-3">Enrolled Courses</h5>
            {enrolledCourses.length > 0 && (
              <Button variant="danger" size="sm" onClick={clearEnrolledCourses}>
                Clear All
              </Button>
            )}
          </div>
          {enrolledCourses.length === 0 ? (
            <p className="text-muted">No courses enrolled yet.</p>
          ) : (
            enrolledCourses.map((course) => (
              <Card key={course.id} className="mb-3 shadow-sm" style={{ borderRadius: "20px" }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <Image
                      src={course.Image}
                      rounded
                      width={50}
                      height={50}
                      style={{ backgroundColor: "lightgrey", objectFit: "cover" }}
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">{course.name}</h6>
                      <small className="text-muted">Instructor: {course.instructor}</small>
                    </div>
                    <div className="ms-auto d-flex align-items-center gap-2">
                      <small className="text-muted">{course.progress || 0}%</small>
                      <div style={{ width: 120 }}>
                        <ProgressBar now={course.progress || 0} variant="success" />
                      </div>
                      <Button size="sm" variant="outline-primary" onClick={() => updateProgress(course.id, Math.min((course.progress || 0) + 10, 100))}>
                        +10%
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}

          <h5 className="fw-bold mt-4 mb-3">Progress Overview</h5>
          <Card className="mb-4 shadow-sm" style={{ borderRadius: "20px", backgroundColor: "#B0E0E6" }}>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <p>Overall Course Completion</p>
                <p>{overallProgress}%</p>
              </div>
              <ProgressBar now={overallProgress} variant="primary" />
            </Card.Body>
          </Card>

          <h5 className="fw-bold mt-4 mb-3">Assignments & Activities</h5>
          {enrolledCourses.length === 0 ? (
            <p className="text-muted">Enroll in a course to see assignments, quizzes, and projects here.</p>
          ) : (
            <Accordion alwaysOpen>
              {enrolledCourses.map((course) => {
                const tasks = tasksByCourse[course.id] || { assignments: [], quizzes: [], projects: [] };
                const completed = completedByCourse[course.id] || { assignments: [], quizzes: [], projects: [] };
                const totalTasks = tasks.assignments.length + tasks.quizzes.length + tasks.projects.length;
                const doneTasks =
                  (completed.assignments?.length || 0) +
                  (completed.quizzes?.length || 0) +
                  (completed.projects?.length || 0);
                const pct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

                return (
                  <Accordion.Item eventKey={String(course.id)} key={course.id} className="mb-2">
                    <Accordion.Header>
                      <div className="d-flex align-items-center w-100">
                        <Image
                          src={course.Image}
                          rounded
                          width={36}
                          height={36}
                          style={{ objectFit: "cover", marginRight: 10 }}
                        />
                        <strong className="me-2">{course.name}</strong>
                        <Badge bg={pct === 100 ? "success" : "secondary"} className="me-3">
                          {pct}% complete
                        </Badge>
                        <div className="flex-grow-1" style={{ maxWidth: 300 }}>
                          <ProgressBar now={pct} variant={pct === 100 ? "success" : "info"} />
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Card className="mb-3">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                          <strong>Assignments</strong>
                          <small className="text-muted">
                            {completed.assignments?.length || 0} / {tasks.assignments.length} done
                          </small>
                        </Card.Header>
                        <ListGroup variant="flush">
                          {tasks.assignments.map((label) => {
                            const done = completed.assignments?.includes(label);
                            return (
                              <ListGroup.Item key={label} className="d-flex justify-content-between align-items-center">
                                <span className={done ? "text-decoration-line-through text-muted" : ""}>
                                  {label}
                                </span>
                                <Button size="sm" variant={done ? "success" : "outline-secondary"} onClick={() => toggleTask(course.id, "assignments", label)}>
                                  {done ? "Completed" : "Mark Complete"}
                                </Button>
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card>

                      <Card className="mb-3">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                          <strong>Quizzes</strong>
                          <small className="text-muted">
                            {completed.quizzes?.length || 0} / {tasks.quizzes.length} done
                          </small>
                        </Card.Header>
                        <ListGroup variant="flush">
                          {tasks.quizzes.map((label) => {
                            const done = completed.quizzes?.includes(label);
                            return (
                              <ListGroup.Item key={label} className="d-flex justify-content-between align-items-center">
                                <span className={done ? "text-decoration-line-through text-muted" : ""}>
                                  {label}
                                </span>
                                <Button size="sm" variant={done ? "success" : "outline-secondary"} onClick={() => toggleTask(course.id, "quizzes", label)}>
                                  {done ? "Completed" : "Mark Complete"}
                                </Button>
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card>

                      <Card className="mb-2">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                          <strong>Projects</strong>
                          <small className="text-muted">
                            {completed.projects?.length || 0} / {tasks.projects.length} done
                          </small>
                        </Card.Header>
                        <ListGroup variant="flush">
                          {tasks.projects.map((label) => {
                            const done = completed.projects?.includes(label);
                            return (
                              <ListGroup.Item key={label} className="d-flex justify-content-between align-items-center">
                                <span className={done ? "text-decoration-line-through text-muted" : ""}>
                                  {label}
                                </span>
                                <Button size="sm" variant={done ? "success" : "outline-secondary"} onClick={() => toggleTask(course.id, "projects", label)}>
                                  {done ? "Completed" : "Mark Complete"}
                                </Button>
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card>

                      <div className="d-flex gap-2">
                        <Button size="sm" variant="outline-success" onClick={() => markAll(course.id)}>
                          Mark All Complete
                        </Button>
                        <Button size="sm" variant="outline-danger" onClick={() => resetAll(course.id)}>
                          Reset
                        </Button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UserDashboard;
