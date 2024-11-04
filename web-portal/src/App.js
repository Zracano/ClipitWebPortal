// src/App.js
import './App.css';
import Login from './components/Login';
import Welcome from './components/Welcome';
import UserData from './components/UserData';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route 
              path='/welcome' 
              element={
                <ProtectedRoute>
                  <Welcome />
                </ProtectedRoute>
              } 
            />
            <Route 
              path='/user-data' 
              element={
                <ProtectedRoute>
                  <UserData />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
