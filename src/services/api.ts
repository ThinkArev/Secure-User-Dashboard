import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});


export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await api.post('/register', { email, password });
  return response.data;
};

export const fetchUsers = async (token: string) => {
  const response = await api.get('/users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
