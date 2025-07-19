import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getStudents = () => axios.get(`${BASE_URL}/students`);
export const getStudentById = (id) => axios.get(`${BASE_URL}/students/${id}`);
export const createStudent = (data) => axios.post(`${BASE_URL}/students`, data);
export const updateStudent = (id, data) => axios.put(`${BASE_URL}/students/${id}`, data);
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/students/${id}`);