import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api.com';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};
