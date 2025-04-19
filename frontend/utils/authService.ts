import api from './api';



export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error registering user';
  }
};
export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await api.post('/login', credentials);
    localStorage.setItem('token', response.data.token); // Save token in localStorage
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error logging in';
  }
};
export const logoutUser = () => {
  localStorage.removeItem('token'); // Remove token from localStorage
};
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};