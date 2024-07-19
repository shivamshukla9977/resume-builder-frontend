// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import UserProfile from './UserProfile';
import { getUserById } from './services/api';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/user/:id"
            element={<UserDetail />}
          />
          <Route
            path="/"
            element={<div>Home Page</div>}
          />
        </Routes>
      </div>
    </Router>
  );
};

const UserDetail = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <div>Error fetching user: {error.message}</div>;
  }

  return (
    <div>
      {user ? <UserProfile user={user} /> : <div>Loading...</div>}
    </div>
  );
};

export default App;
