// src/components/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleGoToUserData = () => {
    navigate('/user-data');
  };

  return (
    <div>
      <h1>Welcome to the Portal!</h1>
      <button onClick={handleGoToUserData}>Go to User Data</button>
    </div>
  );
};

export default Welcome;
