// src/components/NavigationBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to log out the user (e.g., Firebase signOut)
    
    navigate('/');

  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <div>
        <Link to='/welcome' style={{ marginRight: '15px' }}>Welcome</Link>
        <Link to='/user-data'>User Data</Link>
      </div>
      <div>
        <button onClick={handleLogout} style={{ padding: '10px' }}>Logout</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
