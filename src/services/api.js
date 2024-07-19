// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Update with your Rails API URL

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/17`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Similarly, create functions for other endpoints

