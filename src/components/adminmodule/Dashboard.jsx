import React, { useState } from 'react';
import UserManagement from './UserManagement';
import CourseModeration from './CourseModeration';
import Reports from './Reports';


function Dashboard() {
  const [activeTab, setActiveTab] = useState('user');
    const [sidebarOpen, setSidebarOpen] = useState(false);

          const renderContent = () => {
      switch (activeTab) {
      case 'user':
        return <UserManagement />;
        case 'course':
        return <CourseModeration />;
      case 'reports':
        return <Reports />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 sidebar transition-all ${
          sidebarOpen ? 'd-block' : 'd-none d-md-block'
        }`}
        style={{ width: '250px' }}
      >
        <h4 className="mb-4">⚙️ Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <button
              className="btn btn-link text-white"
              onClick={() => {
                setActiveTab('user');
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
                setActiveTab('course');
                setSidebarOpen(false);
              }}>
            
              Course Moderation
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-link text-white"
              onClick={() => {
                setActiveTab('reports');
                setSidebarOpen(false);
              }}>
            
              Reports
            </button>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        {/* Mobile toggle button */}
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