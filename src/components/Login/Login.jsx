import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { UserContext } from '../../Context/UserContext';
import LoginImg from '../../../src/Assets/images/Account.gif';
import styles from './Login.module.css';

export default function Login() {
  const { setUserToken, setIsAdmin, setPrediction } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function submitLogin(values) {
    setIsLoading(true);
    try {
      const response = await axios.post('https://gogreenserver-1-1-numd.onrender.com/api/login', values);

      if (response && response.data) {
        const { data } = response;

        if (data.message === 'success') {
          console.log(data);
          setIsLoading(false);

          const { token } = data;
          const decoded = jwtDecode(token);

          // Set user token and isAdmin state
          setUserToken(token);
          setIsAdmin(decoded.isAdmin);
          // I'll change it later to data.package
          setPrediction(data.user.packages.prediction);
          // Store the token in local storage
          localStorage.setItem('userToken', token);
          localStorage.setItem('prediction', data.user.packages.prediction);
          // Navigate based on isAdmin status
          decoded.isAdmin ? navigate('/admin') : navigate('/dashboard');
        } else {
          // Handle the case where message is not 'success'
          setIsLoading(false);
          setError(data.message || 'Login failed');
        }
      } else {
        // Handle the case where response or response.data is undefined
        setIsLoading(false);
        setError('Unexpected error occurred');
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err);
      setError(err.response?.data?.message || 'An error occurred during login');
    }
  }

  const passwordRegExp = /^(?=.*[a-zA-Z@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  let validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().matches(passwordRegExp, "Invalid password").required("Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: submitLogin
  });

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-3 px-5 py-2 bg-white shadow box-area overflow-hidden">
        <div className='col-md-6 d-flex justify-content-center align-items-center flex-column'>
          <img src={LoginImg} alt="Login Gif" width={400} className='w-100' />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <form onSubmit={formik.handleSubmit}>
            {error !== null ? <div className="alert alert-danger">{error}</div> : ""}

            <h4 className='my-2'>Login Here :</h4>

            <label htmlFor="email" className="m-2">Email :</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>
            )}

            <label htmlFor="password" className="m-2">Password :</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>
            )}

            {isLoading ? (
              <button className="btn bg-main text-white mt-3" type="button">
                <i className='fas fa-spinner fa-spin'></i>
              </button>
            ) : (
              <>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                  <button disabled={!(formik.isValid && formik.dirty)} className="bg-main btn text-white" type="submit">Login</button>
                  <Link to={'/Register'}>Register Now</Link>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
