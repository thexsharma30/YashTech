// src/pages/AdminDashboard.js
import '../styles/AdminDashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('/api/teachers/list')
      .then(response => {
        setTeachers(response.data);
      })
      .catch(error => {
        alert('Failed to fetch teachers');
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Registered Teachers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact No.</th>
            <th>Aadhar No.</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher._id}>
              <td>{teacher.name}</td>
              <td>{teacher.address}</td>
              <td>{teacher.contactNo}</td>
              <td>{teacher.aadharNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
