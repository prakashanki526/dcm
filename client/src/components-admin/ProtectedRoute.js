import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Add your own authentication logic here

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
