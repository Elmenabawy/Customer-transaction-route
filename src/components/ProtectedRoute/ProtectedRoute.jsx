import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { jwtDecode } from 'jwt-decode';

export default function ProtectedRoute({ children, requiredRole }) {
  const { userToken, setUserToken } = useContext(UserContext);

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      setUserToken(storedToken);
    }
  }, []);

  if (!userToken) {
    return <Navigate to='/NotFound' />;
  }

  const decoded = jwtDecode(userToken);
  if (requiredRole !== undefined && decoded.isAdmin !== requiredRole) {
    return <Navigate to='/' />;
  }

  return children;
}