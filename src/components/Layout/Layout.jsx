// Components/Layout/Layout.js
import React, { useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { UserContext } from '../../Context/UserContext';

export default function Layout() {
  const { setUserToken, setIsAdmin } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decoded = jwtDecode(token);
      setUserToken(token);
      setIsAdmin(decoded.isAdmin);
    }
  }, [setUserToken, setIsAdmin]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
