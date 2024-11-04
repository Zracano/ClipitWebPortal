// src/components/UserData.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import BlockSearch from './BlockSearch';
import Block from './Block';

const UserData = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const url = `https://get-user-data-360977260161.us-central1.run.app?user_id=${user.uid}`;
          const response = await fetch(url, { method: 'GET' });

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError('Failed to fetch user data.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData || Object.keys(userData.blocks).length === 0) {
    return <p>No blocks available.</p>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>User Data - Blockchain Blocks</h1>
      <BlockSearch apiKey={userData.api_key} />
      {Object.entries(userData.blocks).map(([blockKey, transactions], index) => (
        <Block key={index} blockKey={blockKey} transactions={transactions} apiKey={userData.api_key} />
      ))}
    </div>
  );
};

export default UserData;