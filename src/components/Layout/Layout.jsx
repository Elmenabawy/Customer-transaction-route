import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useEffect , useContext } from 'react';
import { UserContext } from '../../Context/UserContext';


export default function Layout() {


  let { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'))
    }

  }, []);
  
  return <>
  <Navbar/>
  
  <Outlet/>
  <Footer />
  </>
}
