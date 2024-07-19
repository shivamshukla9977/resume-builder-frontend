// src/App.js
import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import { getUsers } from './services/api';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUsers();
        console.log('Fetched user:', data);
        if (Array.isArray(data) && data.length > 0) {
          setUser(data[0]); // Assuming you want to display the first user
        } else {
          setError(new Error('No user data found'));
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setError(error);
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return <div>Error fetching user: {error.message}</div>;
  }

  return (
    <div className="App">
      {user ? <UserProfile user={user} /> : <div>Loading...</div>}
    </div>
  );
};

export default App;
