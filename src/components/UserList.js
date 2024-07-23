// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import { getAllUser } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUser(search);
        setUsers(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUsers();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  if (error) {
    return <div>Error fetching users: {error.message}</div>;
  }

  return (
    <div>
      <h1>Users Resumes</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={handleSearchChange}
      />
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={`/users/${user.id}`}>
                {user.first_name} {user.last_name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserList;
