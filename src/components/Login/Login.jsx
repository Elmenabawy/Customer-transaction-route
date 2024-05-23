import React from 'react';
import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import LoginImg from '../../../src/Assets/images/Account.gif';
export default function Login() {
  let { setUserToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function submitLogin(values) {
    setisLoading(true);
    let { data } = await axios.post('https://gogreenserver-1-1.onrender.com/api/login', values)
      .catch(
        (err) => {
          setisLoading(false);
          console.log(err.response.data.message)
          seterror(err.response.data.message);
        }
      );
    if (data.message === 'success') {

      setisLoading(false);
      localStorage.setItem('userToken', data.token);
      setUserToken(data.token);
      navigate('/');
    }
  }

  const passwordRegExp = /^(?=.*[a-zA-Z@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/; // Assuming passwords are at least 8 characters long and contain at least one letter and one special character
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
    <div className="container  d-flex justify-content-center align-items-center min-vh-100 " >
      {/*___________________ main box ______________*/}
      <div className="row border rounded-3 px-5 py-2 bg-white shadow box-area overflow-hidden ">
        {/*---------------------- Login Gif --------------------*/}
        <div className='col-md-6 d-flex justify-content-center align-items-center flex-column'>
          <img src={LoginImg} alt="Login Gif" width={400} className='w-100' />
        </div>
        {/* --------------- Login Form ----------------*/}
        <div className=" col-md-6 d-flex justify-content-center align-items-center flex-column">
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

            {isLoading ? <button className="btn bg-main text-white mt-3" type="button">
              <i className='fas fa-spinner fa-spin'></i>
            </button> :
              <>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                  <button disabled={!(formik.isValid && formik.dirty)} className="bg-main btn text-white " type="submit">Login</button>
                  <Link to={'/Register'}>Register Now</Link>
                </div>


              </>}


          </form>
        </div>
      </div>




    </div>


  );
}
