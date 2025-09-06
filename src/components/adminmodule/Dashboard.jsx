import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ✅ useAuth from context
import UserManagement from "./UserManagement";
import CourseModeration from "./CourseModeration";
import Reports from "./Reports";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("user");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // ✅ get from AuthContext

  const handleLogout = () => {
    logout(); // clears auth state
    navigate("/login"); // redirect
  };

  const renderContent = () => {
    switch (activeTab) {
      case "user":
        return <UserManagement />;
      case "course":
        return <CourseModeration />;
      case "reports":
        return <Reports />;
      default:
        return <h4>Welcome, {user?.email || "Admin"} 👋</h4>;
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 sidebar transition-all ${
          sidebarOpen ? "d-block" : "d-none d-md-block"
        }`}
        style={{ width: "250px" }}
      >
        <h4 className="mb-4">ADMIN PANEL</h4>
        <p className="small">Logged in as: {user?.email || "Unknown"}</p>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <button
              className="btn btn-link text-white"
              onClick={() => {
                setActiveTab("user");
                setSidebarOpen(false);
              }}
            >
              User Management
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              className="btn btn-link text-white"
              onClick={() => {
                setActiveTab("course");
                setSidebarOpen(false);
              }}
            >
              Course Moderation
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link text-white"
              onClick={() => {
                setActiveTab("reports");
                setSidebarOpen(false);
              }}
            >
              Reports
            </button>
          </li>
          <li>
            <button className="btn btn-danger mt-3 w-100" onClick={handleLogout}>
              🚪 Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        {/* Mobile menu button */}
        <button
          className="btn btn-outline-secondary d-md-none mb-3"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰ Menu
        </button>
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
