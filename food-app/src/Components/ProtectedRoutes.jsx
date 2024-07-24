import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Replace this with your actual authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;  