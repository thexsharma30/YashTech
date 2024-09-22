// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Replace with your auth check logic

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect to SignIn if not authenticated
  }

  return children; // Render the child component (e.g., AdminDashboard)
};

export default ProtectedRoute;
