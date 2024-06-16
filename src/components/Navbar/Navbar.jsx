import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  let { userToken, setUserToken } = useContext(UserContext);
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/Login');
  }

  const handleScroll = (event) => {
    const { scrollTop } = event.target.documentElement; // Use the scroll position of the target element
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-light py-2 w-100 ${styles.navBar} ${isScrolled ? styles.scrolled : ''}`} onScroll={handleScroll}>
        <div className="container" > {/* Attach the onScroll event handler to a container element */}
          <Link className="navbar-brand" to="/">
            <i className={'logo cursor-pointer fs-2 fa-solid fa-solar-panel'}></i>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {userToken !== null && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link fs-4 cursor-pointer mx-2" to="/Home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-4 cursor-pointer mx-2" to="/Dashboard">Dashboard</Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              {userToken !== null ? (
                <li className="nav-item">
                  <span onClick={logOut} className="nav-link cursor-pointer fs-4 ">Logout</span>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link cursor-pointer fs-5 " to="/Login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link cursor-pointer fs-5 " to="/Register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
