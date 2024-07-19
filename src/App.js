// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import Project from './components/Projects';
import Overview from './components/Overview';
import Links from './components/Links';
import { getUserById } from './services/api';
import './App.css';

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
    <div className="container">
      <div className="jumbotron">
        {user ? <Header user={user} /> : <div>Loading...</div>}
        {user ? <Overview user={user} /> : <div>Loading...</div>}
        {user ? <WorkExperience user={user} /> : <div>Loading...</div>}
        {user ? <TechnicalSkills user={user} /> : <div>Loading...</div>}
        {user ? <Education user={user} /> : <div>Loading...</div>}
        {user ? <Project user={user} /> : <div>Loading...</div>}
        {user ? <Links user={user} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};

export default App;
