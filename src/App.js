// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<UserList />}
          />
          <Route
            path="/users/:id"
            element={<UserDetail />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
