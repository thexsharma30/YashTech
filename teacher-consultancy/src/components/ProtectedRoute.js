import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Simulate authentication

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect to SignIn if not authenticated
  }

  return children; // Render the child component (AdminDashboard or others)
};

export default ProtectedRoute;
