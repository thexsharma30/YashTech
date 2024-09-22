// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = (data) => API.post('/auth/login', data);
export const registerTeacher = (data) => API.post('/teachers/register', data);
export const getTeachers = () => API.get('/teachers/list');
