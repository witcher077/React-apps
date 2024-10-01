import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../AuthContext/userContext';

const ProtectedRoute = ({ children }) => {
  const {isloggedIn}=useContext(UserContext);
  // const isAuthenticated = localStorage.getItem('email'); // Replace this with your actual authentication logic

  if (!isloggedIn) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;  