// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Update with your Rails API URL

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Similarly, create functions for other endpoints

