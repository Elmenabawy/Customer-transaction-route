import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { jwtDecode } from 'jwt-decode';

export default function ProtectedRoute({ children, requiredRole }) {
  const { userToken } = useContext(UserContext);

  if (!userToken) {
    return <Navigate to='/NotFound' />;
  }

  const decoded = jwtDecode(userToken);
  if (requiredRole !== undefined && decoded.isAdmin !== requiredRole) {
    return <Navigate to='/' />;
  }

  return children;
}
